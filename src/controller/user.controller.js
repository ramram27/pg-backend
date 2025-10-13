//group 22
// const userService = require('../services/user.service')

// const userController = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         if (!name || !email || !password) {
//             return res.status(400).json({ message: 'all field are required' })
//         }
//         const user = await userService.userCreate(name, email, password);
//         res.status(201).json(user)
//     } catch (err) {
//         res.status(500).json({ message: 'Internal server error', error: err })
//     }
// }
// module.exports = {
//     userController
// }











//Group 20 and 21
const userService = require('../services/user.service');

const userCreateController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "all field are required" })
        }

        const user = await userService.createUser(name, email, password);

        res.status(201).json({
            message: "user created", data: user
        })

    } catch (err) {
        console.error(err)
        res.status(500).json({
            message: "Internal server error", error: err
        })
    }
}

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'email and password are required' })
        }
        const user = await userService.loginUser(email, password)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', err: err })
    }
}


module.exports = {
    userCreateController,
    loginController
}