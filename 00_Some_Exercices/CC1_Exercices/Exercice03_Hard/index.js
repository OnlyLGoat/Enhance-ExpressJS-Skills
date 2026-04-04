const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const Users = require('./database/db')
const bcrypt = require('bcryptjs')
const auth = require('./middleware/auth')

app.use(express.json())

app.post('/auth/register', async (req, res) => {
    const { email, password } = req.body
    try{
        const EmailVerify = await Users.findOne({ email: email })
        if(EmailVerify){
            return res.status(401).json({ EmailVerify })
        }
        bcrypt.hash(password, 10, (err, hash) =>  {
            if(err){
                return re.status(400).json(err)
            }
            const pwd_hashed = hash
            const User = new Users({
                email,
                password: pwd_hashed
            })
            User.save()
        })
        return res.status(200).json({ message: 'User Ajouter !' })
    }catch(err){
        return res.status(500).json({message: err.message})
    }
})

app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body
    try{
        const user = await Users.findOne({ email })
        if(!user){
            return res.status(404).json({ message: 'User Intoubale !' })
        }
        bcrypt.compare(password, user.password)
            .then((result) => {
                if(!result){
                    return res.status(404).json({ message: 'Password Incorrecte !' })
                }
                const data = { email: email, role: user.role }
                jwt.sign(
                    data,
                    "RANDOM_TOKEN_SECRET",
                    { expiresIn: '2h' },
                    (error, token) => {
                        if(error){
                            return res.status(400).json({ message: error.message })
                        }
                        return res.status(200).json({ token: token })
                    }
                )
            })
            .catch((err) => {
                res.status(500).json({ message: err.message })
            })
    }catch(err){
        return res.status(500).json({ message: err.message })
    }
})

app.get('/profil', auth, (req, res) => {
    const data = req.donnee
    if(!data){
        return res.status(400).json({ message: 'The Data Is Empty !' })
    }
    return res.status(200).json({ data })
})

app.listen('3001', () => {
    console.log('Serveur Demarer !')
})