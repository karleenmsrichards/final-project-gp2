"use strict";
const { Model } = require("sequelize");
const Tokens = require("./tokens");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Tokens, { foreignKey: "user_id" });
    }
  }
  Users.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "Users",
  });
  return Users;
};