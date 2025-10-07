const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtscreateKey = process.env.JWT_SECRET

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.header['authorization'];
        if (!authHeader) {
            return res.status(401).json({ message: 'authrization is missing' })
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'token is missing' })
        }
        jwt.verify(token, process.env.jwtscreateKey, (err, decode) => {

            if (err) {
                return res.status(403).json({ message: 'Invalid or expired token' })
            }
            req.user = decode;
            next()
        })
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', err })
    }
}

module.exports = authMiddleware;