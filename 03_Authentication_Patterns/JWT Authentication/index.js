const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
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
                pwd_hashed
            })
            newUser.save()
                .then(user => res.status(200).json(user))
                .catch(err => res.status(500).json(err))
        })
    }
})

app.listen(4000, () => console.log('Start Server !'))