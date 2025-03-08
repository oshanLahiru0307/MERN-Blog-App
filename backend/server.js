require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()


//middleware...
app.use(express.json())
app.use((req,res,next)=> {
    console.log(req.path)
    next()
})

//connect mongodb...
mongoose.connect(process.env.mongo_uri)
.then(
//app listen...
app.listen(process.env.port, ()=> {
    console.log('app is listening to the port', process.env.port)
})
)
.catch((error)=> {
    console.log(error)
}
)

