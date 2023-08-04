"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
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