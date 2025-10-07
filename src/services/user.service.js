const User = require('../model/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const screateKey = process.env.JWT_SECRET
const createUser = async (name, email, password) => {
    try {
        const roundSalt = 8;
        const hashPassword = await bcrypt.hash(password, roundSalt)
        const user = await User.create(name, email, hashPassword);
        const payload = { id: user.id, email: user.email }
        const token = await jwt.sign(payload, screateKey, { expiresIn: '1h' })
        return {
            message: 'User registered successfully',
            user,
            token
        };
    } catch (err) {
        throw err;
    }
}


module.exports = {
    createUser,
}