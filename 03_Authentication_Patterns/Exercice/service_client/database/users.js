const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/coursDB')
    .then(() => console.log('Connecter !'))
    .catch(err => console.log(err))

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String
})

module.exports = User = mongoose.model('user', userSchema)