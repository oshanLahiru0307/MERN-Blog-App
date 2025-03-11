require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const authRoutes = require('./router/authRoutes')


//middleware...
app.use(cors())
app.use(express.json())
app.use((req,res,next)=> {
    console.log(req.path)
    next()
})

//routes...
app.use('/api/authUser', authRoutes )

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

