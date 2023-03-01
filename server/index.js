
// stater template 

const express = require("express")
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const hostname = "localhost"

dotenv.config({path: './config.env'})
require('./db/conn');

const PORT = 'process.env.PORT'




// lets create first route
app.get("/",(req,res) =>{
    res.send("app is runing fine")
})

// middleware 

const middleware = (req,res,next) =>{
    console.log("we are working on middleware")
    next()

}


app.get("/about", middleware,(req,res) =>{
    res.send(" this is about page ")
})

app.get("/contact",(req,res) =>{
    res.send(" this is Contact page ")
})


// here our app will listen
app.listen(PORT,() =>{
    console.log(`your app is runing at  http://${hostname}:${PORT}`)
})