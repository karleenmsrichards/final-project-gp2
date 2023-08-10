import { Router } from "express";
import logger from "./utils/logger";
const dotenv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");
const { Users, Provider } = require("./sequelize/models");
const {
  persistNewUser,
  persistNewProvider,
} = require("./controller/apiController");

dotenv.config();

const router = Router();

router.get("/", (_, res) => {
  logger.debug("Welcoming everyone...");
  res.json({ message: "Hello Halden 😝, our project has been deployed!" });
});

router.get("/clientId", (req, res) => {
  try {
    const clientId = process.env.CLIENT_ID;
    if (!clientId) {
      throw new Error("Client ID not found.");
    }
    res.json({ clientId }).status(200);
  } catch (error) {
    logger.error("Error fetching clientId:", error.message);
    res.status(500).json({ error });
  }
});

router.post("/validation", async (req, res) => {
  const { token, role } = req.body;
  try {
    const client = new OAuth2Client();
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { name, email } = payload;
    let user = await Users.findOne({ where: { email } });
    if (!user) {
      persistNewUser(name, email, role, token);
    } else {
      res.status(200).json({ message: "success" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
});

router.post("/create-provider", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    businessName,
    profileImage,
    phoneNumber,
    address,
    city,
    country,
    profession,
    yearsOfExperience,
    hourlyRate,
    language,
  } = req.body;

  try {
    const user = await Users.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const providerExists = await Provider.findOne({
      where: { user_id: user.id },
    });

    if (providerExists) {
      return res.status(400).json({ error: "User is already a Provider" });
    }

    const result = await persistNewProvider({
      user_id: user.id,
      firstName,
      lastName,
      email,
      businessName,
      profileImage,
      phoneNumber,
      address,
      city,
      country,
      profession,
      yearsOfExperience,
      hourlyRate,
      language,
    });

    res.status(201).json(result);
  } catch (error) {
    /* eslint-disable-next-line */
		console.log(error);
    res.status(500).json({ error: error });
  }
});

export default router;
