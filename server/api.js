import { Router } from "express";
import logger from "./utils/logger";
const dotenv = require("dotenv");
dotenv.config();

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
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

export default router;
