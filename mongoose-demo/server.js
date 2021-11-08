const express = require("express") //import express library
const app = express()
const port = 8000;

// A coonection to our config, which hooks up mongoose
require("./server/config/mongoose.config")

app.use(express.json()) //so that the application can parse json and read information sent in post requests
app.use(express.urlencoded({extended:true})) //so that the application can read contents of the object that is sent in post requests
// A connection to our routes file
const AllMyRoutes = require("./server/routes/animal.routes")
AllMyRoutes(app)
app.listen(port, ()=>console.log(`listening on port ${port}`)) //tells the application to listen for requests on port 8000