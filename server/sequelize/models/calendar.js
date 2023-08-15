"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Calendar extends Model {
		static associate(models) {}
	}
	Calendar.init(
		{
			calendar_id: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Calendar",
		}
	);
	return Calendar;
};
