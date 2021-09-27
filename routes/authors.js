const express = require('express')

const router = express.Router()

// all authors route
router.get('/', (req, res) => {
  res.render('authors/index')  // rendering view
})

// new author route
router.get('/new', (req, res) => {
    res.render('authors/new')  // rendering view
  })

// create author route
router.post('/', (req, res) => {
    res.send('create')  
  })

module.exports = router