const {Model, DataTypes} = require("sequelize");
class User extends Model {
}

function initUser(sequelizeConnection) {
    User.init({

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        email: DataTypes.STRING,
        name: DataTypes.STRING,
        role: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }, {
        sequelize: sequelizeConnection,
        modelName: "Users",
    });
}

module.exports ={
    initUser, User
}
