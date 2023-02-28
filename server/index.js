
// stater template 

const express = require("express")
const app = express()
const mongoose = require('mongoose')
const port = 3000
const hostname = "localhost"

const DB = 'mongodb+srv://Tehniyat_Fatima_Fareed:yudc9411@cluster0.4zyocie.mongodb.net/project1?retryWrites=true&w=majority'

mongoose.connect(DB,{

  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false 

}).then(() =>{
    console.log(`connection sucessful`)
}).catch((err) => console.log(`no connection`))


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
app.listen(port,() =>{
    console.log(`your app is runing at  http://${hostname}:${port}`)
})