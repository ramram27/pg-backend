const { Pool } = require('pg')
require('dotenv').config();
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: String(process.env.DB_PASSWORD),
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})
pool.on('connect', () => {
    console.log("database is connected")
})

module.exports = pool