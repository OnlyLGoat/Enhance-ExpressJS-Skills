const jwt = require("jsonwebtoken")

const verifyToken = async function isAuth (req, res, next){
    if(!req.headers.authorization){
        return res.status(403).json({ message: 'Token is required !' })
    }
    const token = req.headers.authorization.split(' ')[1]
    if(!token){
        return res.status(403).json({ message: 'Token is required !' })
    }
    jwt.verify(token, "RANDOM_TOKEN_SECRET", (err, data) => {
        if(err){
            return res.status(403).json({ message: err.message })
        }
        req.donnees = data
        next()
    })
}

module.exports = verifyToken