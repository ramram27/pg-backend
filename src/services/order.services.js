const User = require('../model/User.model')

const createOrderService = async (user_id, product_name, amount) => {
    try {
        const orderData = await User.createOder(user_id, product_name, amount)
        return orderData
    } catch (err) {
        throw err;
    }
}

const getUsersAndOrder = async () => {
    try {
        const joindata = await User.getByUsersAndOrders();
        return joindata;
    } catch (err) {
        throw err;
    }
}
module.exports = {
    createOrderService,
    getUsersAndOrder
}