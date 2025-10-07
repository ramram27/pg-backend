const User = require('../model/User.model')

require('dotenv').config()

const screateKey = process.env.JWT_SECRET
const createUser = async (name, email, password) => {
    try {
        const user = await User.create(name, email, password);
        return {
            message: 'User registered successfully',
            user
        };
    } catch (err) {
        throw err;
    }
}


module.exports = {
    createUser,
}