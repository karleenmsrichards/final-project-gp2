import { Router } from "express";
import logger from "./utils/logger";
const dotenv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");
const { Users, Tokens } = require("./models");

dotenv.config();

const router = Router();

router.get("/health", (_, res) => {
	try {
		let serverOk = true;
		let dbOk = false;

		res.json({ serverOk, dbOk }).status(200);
	} catch (error) {
		logger.error("Error fetching clientId:", error.message);
		res.status(500).json({ error });
	}
});

router.get("/clientId", (_, res) => {
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
	if (!token) {
		res.status(400).json({ error: "Missing token!" });
		return;
	}
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
			const newUser = await Users.create({ name, email, role });
			await Tokens.create({ token, user_id: newUser.id });
		} else {
			let currentToken = await Tokens.findOne({ where: { token } });
			if (!currentToken) {
				await Tokens.create({ token, user_id: user.id });
			}
		}
		res.status(200).json({ message: "success!" });
	} catch (error) {
	    console.log(error)
		res.status(500).json({ message: "Invalid token!" });
	}
});

router.delete("/profile", async (req, res) => {
	try {
		const { token } = req.body;
		if (!token) {
			res.status(400).json({ error: "Missing token!" });
		} else {
			const latestToken = await Tokens.findOne({ where: { token } });
			if (!latestToken) {
				res.status(404).json({ error: "Token not found" });
			} else {
				await Tokens.destroy({ where: { user_id: latestToken.user_id } });
				await Users.destroy({ where: { id: latestToken.user_id } });
				const provider = await Provider.findOne({
					where: { user_id: latestToken.user_id },
				});
				if (provider) {
					await Provider.destroy({ where: { user_id: latestToken.user_id } });
					const calendarCode = await Calendar.findOne({
						where: { user_id: latestToken.user_id },
					});
					if (calendarCode) {
						await Calendar.destroy({ where: { user_id: latestToken.user_id } });
					}
				}
				res.status(200).json({ message: "Your account is deleted!" });
			}
		}
	} catch (error) {
		res.status(500).json({ error });
	}
});

export default router;
