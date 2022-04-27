const express  = require('express')
const mongoose = require('mongoose')

const BASE= "mongodb+srv://Shinon:123456A@entregaviernes.px7ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const Comenzar =()=> {
const app     = express()
const port    = 3000

// express body json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app static dir /public
app.use(express.static('public'))
app.listen(port)
}

const manejaError = (error) => {
    console.error(error)
}

mongoose.connect(BASE)
.then(Comenzar)
.catch(manejaError)
