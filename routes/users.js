const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('User List')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

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
router.route('/:id')
    .get((req, res) => {
        const id = req.params.id
        console.log(req.user.name);
        res.send(`Get User With Id ${id}`)
    })
    .post((req, res) => {
        res.send(`Update User With Id ${id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User With Id ${id}`)
    })

router.get('/new', (req, res) => {
    res.send('User New Form')
})

// Hey When Ever You Find A Param With The Name id Run A Function

const users = [{ name: 'Kyle' }, { name: 'Sally' }]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router