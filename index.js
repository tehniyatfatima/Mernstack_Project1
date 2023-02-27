
// stater template 

const express = require("express")
const app = express()
const port = 3000
const hostname = "localhost"


app.get("/",(req,res) =>{
    res.send("app is runing fine")
})

app.get("/about",(req,res) =>{
    res.send(" this is about page ")
})

app.get("/contact",(req,res) =>{
    res.send(" this is Contact page ")
})


app.listen(port,() =>{
    console.log(`your app is runing at  http://${hostname}:${port}`)
})