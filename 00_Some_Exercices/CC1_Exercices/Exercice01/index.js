const express = require('express')
const Courses = require('./db')
const app = express()

app.use(express.json())

app.post('/cours', async (req, res) => {
    try {
        const { code_cours, nom, date_creation } = req.body

        const Course = new Courses({
            code_cours,
            nom,
            date_creation
        })

        const saveCourse = await Course.save()
        return res.status(201).json(saveCourse)

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

app.get('/cours/:code_cours', async (req, res) => {
    const code = req.params.code_cours
    const Cours = await Courses.findOne({ code_cours: code })
    if(!Cours){
        return res.status(404).json({ message: 'Cours Introuvable !' })
    }
    return res.status(200).json(Cours)
})

// Method 1
// app.delete('/cours/:id', async (req, res) => {
//     const id = req.params.id
//     const Cours = await Courses.findOne({ id })
//     if(!Cours){
//         return res.status(404).json({ message: 'Cous Introuvable !' })
//     }
//     await Courses.deleteOne({ id })
//     return res.status(200).json({ message: 'Cours A Ete Supprimer !' })
// })

// Method 2
app.delete('/cours/:code_cours', async (req, res) => {
    const code = parseInt(req.params.code_cours)
    const Course = await Courses.findOneAndDelete({ code_cours: code })
    if(!Course){
        return res.status(404).json({ message: 'Cours Introuvable !' })
    }
    return res.status(200).json({ message: 'Cours A Ete Supprimer !' })
})

app.listen('3001', () => {
    console.log('Serveur Demarer !')
})