//
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// express
const express = require('express')
const app = express()

//routes requiring
const indexRouter = require('./routes/index')

// templating engine --- views
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//layouts
const expressLayouts = require('express-ejs-layouts')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)

// public
app.use(express.static('public'))

// database
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected'))

// routes using
app.use('/', indexRouter)

// listening
app.listen(process.env.PORT || 3000)