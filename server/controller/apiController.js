const { Users, Tokens, Provider } = require("../sequelize/models");

export async function persistNewUser(name, email, role) {
	const newUser = await Users.create({ name, email, role });
	return newUser;
}

export async function persistNewToken(id,token) {
	await Tokens.create({ token, user_id: id });
}

export async function persistNewProvider({
	user_id,
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
}) {
	try {
		const existingUser = await Users.findOne({ where: { email } });

		if (existingUser && existingUser.role === "customer") {
			existingUser.role = "provider";
			await existingUser.save();
		}

		const newProvider = await Provider.create({
			user_id,
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

		return { message: "Provider created successfully", provider: newProvider };
	} catch (error) {
		return { message: "Error creating Provider" };
	}
}
