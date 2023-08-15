"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Calendar extends Model {
		static associate(models) {}
	}
	Calendar.init(
		{
			calendar_id: DataTypes.STRING,
			user_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Calendar",
		}
	);
	return Calendar;
};
