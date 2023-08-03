let {User, initUser} = require('../models/users')
let {getSequelize} = require('../models/connectionFactory')

async function setupSequelize(env) {
    const sequelize = getSequelize(env);
    await sequelize.sync();
    initUser(sequelize);
    await User.sync()


    const user = await User.create({id: 18898, name: 'bob', email: 'bob8@gmail.com', role: 'standard'});
    console.log(user)
    console.log(await User.count())
}

setupSequelize('development')

console.log('success')
