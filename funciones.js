const express=require('express');/*Pedimos el paquete express*/
const ejercicio=express();/*Hace que nuestro servidor pueda funcionar.App es mi servidor*/
ejercicio.listen(3000);/*Puerto de nuestro servidor=> localhost:3000*/
const mongoose=require('mongoose');/*Pedimos el paquete de mongoose*/
const BASE=('mongodb+srv://Shinon:123456A@entregaviernes.px7ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const model=require('./frases.model');/*Necesitamos nuestro modelo de las frases y el autor*/

let ej=()=>{
ejercicio.get("/", async(req,res)=>{
    mongoose.connect(BASE,function(err,db){
        let FRASES= db.collection("frases").find({}).toArray(function(err,FRASES){
            let NUMERORANDOM= Math.floor(Math.random() * FRASES.length);
                res.render("inicio.ejs",{
                    frase: FRASES[NUMERORANDOM].frase,
                    autor:FRASES[NUMERORANDOM].autor})
                })
               
                    db.close();
        })
})

ejercicio.get("/inicio",async(req,res)=>{
    mongoose.connect(BASE,function(err,db){
        let FRASES= db.collection("frases").find({}).toArray(function(err,FRASES){
            let NUMERORANDOM= Math.floor(Math.random() * FRASES.length);
                res.render("inicio.ejs",{
                    frase: FRASES[NUMERORANDOM].frase,
                    autor:FRASES[NUMERORANDOM].autor})
                })
               
                    db.close();
        })
})

ejercicio.post("/",async(req,res)=>{
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
})
}
let DaError=(err)=>{
    console.log(err);
}

mongoose.connect(BASE)
.then(ej)
.catch(DaError)