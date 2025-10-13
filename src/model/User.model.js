//Group 22
// const pool = require('../config/db')
// const userCreateTable = async () => {
//     await pool.query(`
//          CREATE TABLE IF NOT EXISTS USERS(
//           id SERIAL PRIMARY KEY,
//           name VARCHR(100) NOT NULL,
//           email VARCHAR(255) UNIQUE NOT NULL,
//           password VARCHAR(255) NOT NULL
//          );

//       CREATE TABLE IF NOT EXISTS orders (
//       id SERIAL PRIMARY KEY,
//       user_id INT REFERENCES users(id) ON DELETE CASCADE,
//       product_name VARCHAR(255) NOT NULL,
//       amount DECIMAL(10, 2) NOT NULL
//     );
//     `)
// }
// userCreateTable()

// const User = {
//     async create(name, email, password) {
//         const res = await pool.query("INSERT INTO USERS(name,email,password) VALUES($1,$2,$3) RETURNING *",
//             [name, email, password]
//         )
//         return res.rows[0]
//     },
//     async findByEmail(email) {
//         const res = await pool.query("SELECT * FROM USERS WHERE email = $1", [email])
//         return res.rows[0]
//     },
//     async createOrderData(user_id, product_name, amount) {
//         await pool.query(
//             "INSERT INTO orders (user_id, product_name, amount) VALUES ($1, $2, $3) RETURNING *",
//             [user_id, product_name, amount]
//         )
//         res.rows[0]
//     },
//     async getUserAndOrderTable() {
//         const res = await pool.query(`
//         SELECT USERS.name, USERS.email, orders.product_name, orders.amount
//         FROM USERS
//         INNER JOIN orders ON USERS.id = orders.user_id
//        `);
//     }
// }

// module.exports = User;










//Group 21 and 20
const pool = require('../config/db');

const createUserTable = async () => {
    await pool.query(`
     CREATE TABLE IF NOT EXISTS USERS(
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
     )
    
     CREATE TABLE iF NOT EXISTS orders(
     id SERIAL PRIMARY KEY,
     user_id INT REFERENCES USERS(id) ON DELETE CASCADE,
     product_name VARCHAR(255) NOT NULL,
     amount INT NOT NULL
     )
    `)
}
createUserTable()

const User = {
    async create(name, email, password) {
        const res = await pool.query(
            "INSERT INTO USERS(name,email,password) VALUES($1,$2,$3) RETURNING *",
            [name, email, password]
        )
        return res.rows[0]
    },

    async findByEmail(email) {
        const res = await pool.query("SELECT * FROM USERS WHERE email = $1", [email])
        return res.rows[0];
    },

    async createOder(user_id, product_name, amount) {
        const res = await pool.query("INSERT INTO orders(user_id,product_name,amount) VALUES($1,$2,$3) RETURNING *",
            [user_id, product_name, amount]
        )
        return res.rows[0]
    },

    async getByUsersAndOrders() {
        const res = await pool.query("SELECT USERS.name,USERS.email,orders.product_name,orders.amount FROM USERS INNER JOIN orders WHERE USERS.id = orders.user_id")
        return res.rows[0]
    }

}
module.exports = User;