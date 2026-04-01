const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/UserJWTCours')
    .then(() => console.log('Connecter A La BD !'))
    .catch(err => console.log(err))

const usersSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const Users = mongoose.model('Users', usersSchema)
module.exports = Users