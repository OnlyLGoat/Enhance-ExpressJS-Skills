const express = require("express")
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Users = require('./database/users') 

app.use(express.json())

app.post('/auth/register', async (req, res) => {
    let {fullname, email, password} = req.body
    const userExists = await Users.findOne({ email })
    if(userExists){
        return res.status(403).json({ message: 'User Already Exist !' })
    }else{
        bcrypt.hash(password, 10, (err, hash) => {
            if(err){
                return res.status(500).json(err)
            }
            pwd_hashed = hash
            const newUser = new Users({
                fullname,
                email,
                pwd_hashed
            })
            newUser.save()
                .then(user => res.status(201).json(user))
                .catch(error => res.status(500).json(error))
        })
    }
})

app.listen(4000, () => console.log('Start Server !'))