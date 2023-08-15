const dotenv = require("dotenv");
dotenv.config();

module.exports = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		dialect: "postgres",
		port: process.env.DB_PORT,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
	},
	test: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		dialect: "postgres",
		port: process.env.DB_PORT,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		dialect: "postgres",
		port: process.env.DB_PORT,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
	},
};
