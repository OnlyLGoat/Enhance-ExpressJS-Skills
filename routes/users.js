const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    // Access To Our Query Param
    console.log(req.query.name);

    res.send('User List')
})

// router.post('/', (req, res) => {
//     res.send('Create User')
// })

// All This 3 Routes Have The Same Path
// router.get('/:id', (req, res) => {
//     const id = req.params.id
//     res.send(`Get User With Id ${id}`)
// })

// router.put('/:id', (req, res) => {
//     const id = req.params.id
//     res.send(`Get User With Id ${id}`)
// })

// router.delete('/:id', (req, res) => {
//     const id = req.params.id
//     res.send(`Get User With Id ${id}`)
// })
//  |
//  |
// router.route('/:id')
//     .get((req, res) => {
//         const id = req.params.id
//         // console.log(req.user.name);
//         res.send(`Get User With Id ${id}`)
//     })
//     .post((req, res) => {
//         res.send(`Update User With Id ${id}`)
//     })
//     .delete((req, res) => {
//         res.send(`Delete User With Id ${id}`)
//     })

// Render new.ejs With Passing A JSON Data To His Form
router.get('/new', (req, res) => {
    res.render('users/new', { fullname: 'Sonny Hayes' })
})

// Access To The Variable That We Will POST It With Our Form
// First Time We Gonna Got An Error Because Express Don't Allow
// Us To Access To The Body.
// We Need A Middleware To Do It With Force
// In Our index.js -> app.use(express.urlencoded())
// This Allow Us To Access The Information Coming From Forms
router.post('/', (req, res) => {
    const isValid = true
    if(isValid) {
        users.push({ name: req.body.fullname })
        res.redirect(`/users/${users.length - 1}`)
    }else{ 
        console.log('error')
        res.render('users/new', { fullname: 'Sonny Hayes' })
    }

    console.log(req.body.fullname);
    res.send('Hi')
})

// Hey When Ever You Find A Param With The Name id Run A Function
const users = [{ name: 'Kyle' }, { name: 'Sally' }]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next){
    console.log(req.originalUrl);
    next()
}

module.exports = router