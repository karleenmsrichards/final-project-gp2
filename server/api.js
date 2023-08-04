import { Router } from "express";
import logger from "./utils/logger";
const dotenv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");
const { Users, Tokens } = require("./sequelize/models");

dotenv.config();

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello Halden 😝, our project has been deployed!" });
});

router.get("/clientId", (req, res) => {
	try {
		const clientId = process.env.REACT_APP_CLIENT_ID;
		if (!clientId) {
			throw new Error("Client ID not found.");
		}
		res.json({ clientId }).status(200);
	} catch (error) {
		logger.error("Error fetching clientId:", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
});

router.post("/validation", async (req, res) => {
	const { token } = req.body;
	try {
		const client = new OAuth2Client();
		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: process.env.REACT_APP_CLIENT_ID,
		});
		const payload = ticket.getPayload();
		const { name, email } = payload;
		let user = await Users.findOne({ where: { email } });
		if (!user) {
			const newUser = await Users.create({ name, email, role });
			await Tokens.create({ token, user_id: newUser.id });
		} else {
			res.status(200).json({ message: "success" });
		}
	} catch (error) {
		res.status(400).json({ error: "Invalid token" });
	}
});

export default router;
