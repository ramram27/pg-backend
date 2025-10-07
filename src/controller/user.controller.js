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


module.exports = {
    userCreateController,
}