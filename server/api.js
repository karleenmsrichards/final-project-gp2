import { Router } from "express";
import logger from "./utils/logger";
const dotenv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");
const { Users } = require("./sequelize/models");
const { persistNewUser } =require("./controller/apiController");

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

	const { token,role } = req.body;
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


router.delete("/api/delete-profile", async (req, res) => {

	try {

		const { userId } = req.body;
		if (!userId) {
			return res.status(400).json({ error: "userId is required" });
		}

		// Find the user by userId
		const user = await Users.findOne({ where: { id: userId } });
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
		// Delete the user
		await user.destroy();

		res.status(200).json({ message: "Profile deleted successfully" });
		// Send a success response
		res.status(200).json({ message: "Profile deleted successfully" });


	} catch(error) {
		// Handle error and send an error response
		res.status(500).json({ error: "Error deleting profile" });

	}
});





export default router;
