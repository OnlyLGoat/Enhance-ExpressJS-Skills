// Required Importations
const express = require('express')
const app = express()

// Import Our User Routers
const userRouter = require('./routes/users')

// Setup Our View Engine
app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.send('Go to /users')
    // res.send('Hi') // Sending A Text Message

    // res.json({ message: 'Error' }) // Sending A JSON Message

    // res.sendStatus(500) // Send Page Status

    // res.status(500).send('Server Error') // Send Page Status With A Text Message

    // res.status(500).json({ message: 'Error' }) // Send Page Status With A JSON Message

    // res.download('index.js') // Sending A File To Download

    // res.render('index') // Got An Error In The First Time Because We Don't Have A View Engine Setup
                        // We Gonna Use ejs As Our View Engine
                        // Run: npm i ejs
                        // Rename Ur index.html To index.ejs
                        // Make Sure To Install EJS Language Support Extension

    // res.render('index') // Render index.ejs Content

    // res.render('index', { text: 'World' }) // Render index.ejs Content With Sending A Text
})

// Always This Routes Will Start With /users/...
app.use('/users', userRouter)

app.listen(3500)