const express=require('express');/*Pedimos el paquete express*/
const ejercicio=express();/*Hace que nuestro servidor pueda funcionar.App es mi servidor*/
ejercicio.listen(3000);/*Puerto de nuestro servidor=> localhost:3000*/
const mongoose=require('mongoose');/*Pedimos el paquete de mongoose*/
const BASE=('mongodb+srv://Shinon:123456A@entregaviernes.px7ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const model=require('./frases.model');/*Necesitamos nuestro modelo de las frases y el autor*/

let recoge_datos = async (req, res) => {
    const {query, params, body} = req
    const author = body.author
    const frase = body.frase

  
    let modelo = new model()
    modelo.author = author
    modelo.frase = frase
    modelo = await modelo.save()

    modelo.save().then((data)=>{
        res.redirect('/insertar')
    }).catch((error)=>{
        console.error(error)
    })

}
mongoose.connect(BASE,function(err,db){
    let FRASES=db.collection("frases").find({}).toArray(function(err,FRASES){
        let NUMERORANDOM=Math.floor(Math.random()*FRASES.length);
    })
})
let mostrar_frase = (req, res) => {
    const {query, params, body} = req
    let queries = {
        frase: FRASES[NUMERORANDOM].frase,
        author: FRASES[NUMERORANDOM].autor
    }
   ejs.renderFile('./cosas/mostrar_frase.ejs', queries, {}, (err, str) => {
        if (err) {
         console.log(err)
        }
        res.send(str)
       })

}
let insertar_frase = (req, res) => {

    let callback = (error, str) => {
        if (error) {
            console.log(error)
           }
           res.send(str)
    }

    ejs.renderFile('./templates/insertar_frase.ejs', {}, {}, callback)
 }

exports.recoge_datos   = recoge_datos
exports.insertar_frase = insertar_frase
exports.mostrar_frase  = mostrar_frase