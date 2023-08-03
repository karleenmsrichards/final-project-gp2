const {Sequelize} = require("sequelize");

const dbConfig = {
    development: {
        host: '127.0.0.1',
        database: 'project_development',
        username: 'postgres',
        password: null,
        port: 5433,
    }
};

function getSequelize(env) {
    config = dbConfig[env]
    return new Sequelize(
        config['database'],
        config['username'],
        config['password'],
        {
            host: config['host'],
            dialect: "postgres",
            port: config['port'],
            dialectOptions: config['dialectOptions']
        }
    );
}

async function sequelizeSetupAll(env) {
    const sequelize = getSequelize(env);
    await sequelize.sync();
    initUser(sequelize);
    await User.sync()
    return {User}
}

module.exports = { getSequelize, sequelizeSetupAll }
