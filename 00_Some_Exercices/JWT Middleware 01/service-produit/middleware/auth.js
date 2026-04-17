const jwt = require('jsonwebtoken')


const verifyToken = async (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(400).json({ message: 'Authorization is empty !' })
    }
    const token = req.headers.authorization.split(' ')[1]
    if(!token){
        return res.status(400).json({ message: 'Token Not Found !' })
    }
    jwt.verify(
        token,
        "RANDOM_TOKEN_SECRET",
        (err, data) => {
            if(err){
                return res.status(400).json({ message: err.message })
            }
            req.donnee = data
            next()
        }
    )
}

module.exports = verifyToken