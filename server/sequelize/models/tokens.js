"use strict";
const { Model } = require("sequelize");
const Users = require("./users");

module.exports = (sequelize, DataTypes) => {
  class Tokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tokens.belongsTo(models.Users, { foreignKey: "user_id" });
    }
  }
  Tokens.init({
    token: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: "Tokens",
  });
  return Tokens;
};