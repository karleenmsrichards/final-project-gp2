let {User, initUser} = require('./models/user2')
let {getSequelize} = require('./connectionFactory')

async function setupSequelize(env) {
    const sequelize = getSequelize(env);
    await sequelize.sync();
    initUser(sequelize);
    await User.sync()


    const user = await User.create({id: 129, name: 'bob', email: 'bob@gmail.com', role: 'standard'});
    console.log(user)
    console.log(await User.count())

}

setupSequelize('development')

console.log('success')
