// 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// express
const express = require('express')
const app = express()

//routes requiring -- (from routes folder)
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

// template engine --- views
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//layout
const expressLayouts = require('express-ejs-layouts')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)

// public (static files)
app.use(express.static('public'))

// database -- MongoDB
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected'))

// routes using (that we imported from the routes file)
app.use('/', indexRouter)
app.use('/authors', authorRouter)

// listening
app.listen(process.env.PORT || 3000)
