const express  = require('express')
const mongoose = require('mongoose')

const BASE= "mongodb+srv://Shinon:123456A@entregaviernes.px7ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const Comenzar =()=> {
const app     = express()
const port    = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port)
}

const manejaError = (error) => {
    console.error(error)
}

mongoose.connect(BASE)
.then(Comenzar)
.catch(manejaError)
