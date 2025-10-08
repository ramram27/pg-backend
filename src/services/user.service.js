//group 22
// const User = require('../model/User.model');
// const userCreate = async (name, email, password) => {
//     try {
//         const user = await User.create(name, email, password);
//         return user;
//     } catch (err) {
//         throw err;
//     }
// }
// module.exports = {
//     userCreate
// }









//group 20 and 21
const User = require('../model/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const screateKey = process.env.JWT_SECRET
const createUser = async (name, email, password) => {
    try {
        const roundSalt = 10;
        const hashPassword = await bcrypt.hash(password, roundSalt)
        const user = await User.create(name, email, hashPassword);
        const payload = { id: user.id, email: user.email }
        const token = jwt.sign(payload, screateKey, { expiresIn: '1h' })
        return {
            message: 'User registered successfully',
            user,
            token
        };
    } catch (err) {
        throw err;
    }
}

const loginUser = async (email, password) => {
    try {
        const user = await User.findByEmail(email)
        if (!user) {
            throw Error('email id not found')
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            throw Error('Invalid credential')
        }
        const payload = { id: user.id, name: user.name, email: user.email }
        const token = jwt.sign(payload, screateKey, { expiresIn: '1h' })
        return {
            message: 'user login',
            data: {
                id: user.id,
                name: user.name,
                email: user.email
            },
            token
        }
    } catch (err) {
        throw err;

    }
}


// const loginUser = async (email, password) => {
//     try {
//         const user = await User.findByEmail(email);
//         if (!user) {
//             return { message: "user not found" }
//         }
//         const isMatch = await bcrypt.compare(password, user.password)
//         if (!isMatch) {
//             return { message: "invalid credential" }
//         }
//         const userdata = { id: user.id, name: user.name, email: user.email }
//         const payload = { id: user.id, email: user.email }
//         const token = jwt.sign(payload, screateKey, { expiresIn: '1h' })
//         return {
//             message: "User login",
//             userdata,
//             token
//         }
//     } catch (err) {
//         throw err;
//     }
// }


module.exports = {
    createUser,
    loginUser
}