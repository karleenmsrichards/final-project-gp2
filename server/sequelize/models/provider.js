"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Provider extends Model {
		/* eslint-disable-next-line */
		static associate(models) {
			Provider.belongsTo(models.Users, { foreignKey: "user_id" });
			Provider.hasOne(models.Calendar, { foreignKey: "provider_id" });
		}
	}
	Provider.init(
		{
			user_id: DataTypes.INTEGER,
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			businessName: DataTypes.STRING,
			profileImage: DataTypes.STRING,
			phoneNumber: DataTypes.STRING,
			address: DataTypes.STRING,
			city: DataTypes.STRING,
			country: DataTypes.STRING,
			profession: DataTypes.STRING,
			yearsOfExperience: DataTypes.INTEGER,
			hourlyRate: DataTypes.INTEGER,
			language: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Provider",
		}
	);
	return Provider;
};
