const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/courseDB')
    .then(() => console.log('Mongo Connecter !'))
    .catch((err) => console.log(err.message))

const CourseSchema = new mongoose.Schema({
    code_cours: Number,
    nom: String,
    date_creation: Date
})

const Course = mongoose.model('Course', CourseSchema)
module.exports = Course