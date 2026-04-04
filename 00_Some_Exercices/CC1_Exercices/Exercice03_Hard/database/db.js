const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/Ex03Hard')
    .then(() => console.log('MongoDB Connecter !'))
    .catch((err) => console.log(err))

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    date_creation: {
        type: Date,
        default: Date.now()
    }
})

const Users = mongoose.model('Users', usersSchema)
module.exports = Users