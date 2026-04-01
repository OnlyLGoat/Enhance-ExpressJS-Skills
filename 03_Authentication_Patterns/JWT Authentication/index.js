const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const Users = require('./database/utilisateur')

app.use(express.json())

app.post('/register', async (req, res) => {
    let { username, email, password } = req.body
    let userExists = await Users.findOne({ email })
    if(userExists){
        return res.status(500).json({ message: 'User Already Exists !' })
    }else{
        bcrypt.hash(password, 10, (err, hash) => {
            if(err){
                return res.status(500).json(err)
            }
            const pwd_hashed = hash
            const newUser = new Users({
                username,
                email,
                password: pwd_hashed
            })
            newUser.save()
                .then(user => res.status(200).json(user))
                .catch(err => res.status(500).json(err))
        })
    }
})


app.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await Users.findOne({ email })
    if(!user){
        return res.status(404).json({ message: 'User Not Found !' })
    }
    bcrypt.compare(password, user.password)
        .then(result => {
            if(!result){
                return res.status(400).json({ message: 'Password Incorrect !' })
            }
            const data = { email: email, username: user.username }
            jwt.sign(
                data,
                "RANDOM_TOKEN_SECRET",
                { expiresIn: "2h" },
                (error, token) => {
                    if(error){
                        res.status(404).json({ message: error.message })
                    }
                    return res.status(200).json({ token: token, result: result })
                }
            )
        })
        .catch(error => {
            return res.status(500).json({message: error.message})
        })
})

app.listen(4000, () => console.log('Start Server !'))