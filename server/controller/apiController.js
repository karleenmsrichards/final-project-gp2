const { Users, Provider } = require("../sequelize/models");

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

		if (existingUser?.role === "customer") {
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
		/* eslint-disable-next-line */
		console.log(error);
		return { error: error };
	}
}
