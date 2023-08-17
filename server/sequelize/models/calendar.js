"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Calendar extends Model {
		static associate(models) {
			Calendar.belongsTo(models.Provider, { foreignKey: "provider_id" });
		}
	}
	Calendar.init(
		{
			calendar_link: DataTypes.STRING,
			provider_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Calendar",
		}
	);
	return Calendar;
};
