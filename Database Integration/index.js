const express = require('express')
const app = express();
const Course = require('./db')

// Middleware
app.use(express.json())

// GET All Courses
app.get('/courses', async (req, res) => {
    try{
        const Courses = await Course.find()
        res.status(201).json(Courses)
    }catch (err){
        res.status(500).json({ message: err.message })
    }
})

// GET Information Of The Id Passed On The URL
app.get('/course/:id', async (req, res) => {
    try{
        const id = req.params.id
        const courses = await Course.find({ code_cours: id })
        res.status(201).json(courses)
    }catch (err){
        res.status(500).json({ message: err.message })
    }
    res.json(courses)
})

// POST Create A New Course
app.post('/courses', async (req, res) => {
    try{
        const { code_cours, nom } = req.body
        const newCourse = new Course({ code_cours, nom })
        await newCourse.save()
        res.status(201).json(newCourse)
    }catch (err){
        res.status(500).json({ message: err.message })
    }
})

// PUT Update A Course
app.put('/courses/:id', async (req, res) => {
    try{
        const id = req.params.id
        const updateCourse = await Course.findOneAndUpdate(
            { code_cours: id },
            req.body,
            { new: true }
        )
        res.json(updateCourse)
    }catch (err){
        res.status(500).json({ message: err.message })
    }
})

// DELETE Delete A Course
app.delete('/courses/:id', async (req, res) => {
    try{
        const id = req.params.id
        await Course.findOneAndDelete(
            { code_cours: id }
        )
        res.json({ message: "Cours supprimé" });
    }catch (err){
        res.status(500).json({ message: err.message })
    }
})

app.listen(3500, () => {
    console.log('Server Start !');
})