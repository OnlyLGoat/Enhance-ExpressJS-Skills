const mongoose = require('mongoose')

// Connect To Our DB
mongoose.connect('mongodb://127.0.0.1:27017/coursDB')
    .then(() => console.log('Connecter !'))
    .catch(err => console.log(err))

// Create Our Collection
const courseSchema = new mongoose.Schema({
    code_cours: Number,
    nom: String,
    data_creation: Date
})

const Course = mongoose.model('Course', courseSchema)
module.exports = Course