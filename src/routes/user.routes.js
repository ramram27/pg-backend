// group 22
// const express = require('express');
// const userController = require('../controller/user.controller')

// const router = express.Router();

// router.post('/create-user', userController.userController)

// module.exports = router;




//group 20 and 21
const express = require('express')
const userController = require('../controller/user.controller');

const router = express.Router();

router.post('/create-user', userController.userCreateController)
router.post('/login', userController.loginController)

module.exports = router;