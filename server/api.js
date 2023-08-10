import { Router } from "express";
import logger from "./utils/logger";
const dotenv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");
const { Users, Provider, Tokens } = require("./sequelize/models");
const {
	persistNewUser,
	persistNewToken,
	persistLatestToken,
	persistNewProvider,
} = require("./controller/apiController");

dotenv.config();

const router = Router();

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
			user = persistNewUser(name, email, role);
			persistNewToken(user.id, token);
		} else {
			persistLatestToken(user.id, token);
		}
		res.status(200).json({ message: "success" });
	} catch (error) {
		res.status(400).json({ error: "Invalid token" });
	}
});

router.delete("/delete-profile", async (req, res) => {
	try {
		const { token } = req.body;
		if (!token) {
			res.status(400).json({ error: "userId is required" });
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
				}
				res.status(200).json({ message: "Your account is deleted!" });
			}
		}
	} catch (error) {
		res.status(500).json({ error });
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
