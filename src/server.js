const express = require('express')
const userRouter = require('./routes/user.routes')
require('dotenv').config()

const PORT = process.env.PORT
const app = express();
app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => {
    console.log("Server is runing :", PORT)
})