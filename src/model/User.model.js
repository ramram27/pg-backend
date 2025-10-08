//Group 22
// const pool = require('../config/db')
// const userCreateTable = async () => {
//     await pool.query(`
//          CREATE TABLE IF NOT EXISTS USERS(
//           id SERIAL PRIMARY KEY,
//           name VARCHR(100) NOT NULL,
//           email VARCHAR(255) UNIQUE NOT NULL,
//           password VARCHAR(255) NOT NULL
//          )
//         `)
// }
// userCreateTable()

// const User = {
//     async create(name, email, password) {
//         const res = await pool.query("INSERT INTO USERS(name,email,password) VALUES($1,$2,$3) RETURNING *",
//             [name, email, password]
//         )
//         return res.rows[0]
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

}
module.exports = User;