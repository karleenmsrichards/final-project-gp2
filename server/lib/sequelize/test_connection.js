let {User, initUser} = require('./models/users')
let {getSequelize} = require('./connectionFactory')

async function setupSequelize(env) {
    const sequelize = getSequelize(env);
    await sequelize.sync();
    initUser(sequelize);
    await User.sync()


    const user = await User.create({id: 1, name: 'bob', email: 'bob@gmail.com', role: 'standard'});
    console.log(user)
    console.log(await User.count())

}

setupSequelize('development')

console.log('success')
