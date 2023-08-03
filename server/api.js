import { Router } from "express";
import logger from "./utils/logger";
const dotenv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");
dotenv.config();
let {User, initUser} = require('./lib/sequelize/models/users')
let {getSequelize} = require('./lib/sequelize/connectionFactory')

const sequelize = getSequelize('development');
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
		res.status(500).json({ error: "Internal server error Heni" });
	}
});

router.get("/jarrodtest", async (req, res) => {
	try {
		await sequelize.sync();
		initUser(sequelize);
		await User.sync()
		await User.create({id:9997796, name: 'bob', email: 'bob@gmail.com', role: 'standard'});
		res.json({ result: 'user created' }).status(200);
	} catch (error) {
		res.status(500).json({ error: error });
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
		res.status(200).json({ message: "success" });
	} catch (error) {
		res.status(400).json({ error: "Invalid token" });
	}
});

export default router;
