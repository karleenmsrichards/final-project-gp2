const { Users, Tokens } = require("../sequelize/models");

export async function persistNewUser(name, email, role, token) {
	const newUser = await Users.create({ name, email, role });
	await Tokens.create({ token, user_id: newUser.id });
}
