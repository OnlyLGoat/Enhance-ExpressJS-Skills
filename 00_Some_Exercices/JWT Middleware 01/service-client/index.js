const express = require('express');
const Clients = require('./client'); 
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const auth = require('./middleware/auth')
const app = express();

app.use(express.json());



app.post('/register', async (req, res) => {
    const { nom, email, password } = req.body
    try{
        const EmailVerify = await Clients.findOne({ email })
        if(EmailVerify){
            return res.status(401).json({ EmailVerify })
        }

        bcrypt.hash(password, 10, (err, hash) =>  {
            if(err){
                return re.status(400).json(err)
            }
            const password_hash = hash
            const newClient = new Clients({
                nom,
                email_utilisateur: email,
                password: password_hash
            })
            newClient.save()
        })
        return res.status(200).json({ message: 'User Ajouter !' })
    }catch(err){
        return res.status(500).json({message: err.message})
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    try{
        const clt = await Clients.findOne({ email_utilisateur: email })
        if(!clt){
            return res.status(404).json({ message: 'Client Intoubale !' })
        }
        bcrypt.compare(password, clt.password)
            .then((result) => {
                if(!result){
                    return res.status(404).json({ message: 'Password Incorrecte !' })
                }
                const data = { email: email, nom: clt.nom }
                jwt.sign(
                    data,
                    "RANDOM_TOKEN_SECRET",
                    { expiresIn: '2h' },
                    (error, token) => {
                        if(error){
                            return res.status(400).json({ message: error.message })
                        }
                        return res.status(200).json({ token: token, data: data })
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

app.get('/afficher', auth, (req, res) => {
    Clients.find()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err));
});

app.listen(3000, () => {
    console.log("Serveur lancé sur port 3000");
});