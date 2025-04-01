require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const authRoutes = require('./router/authRoutes')
const userRoutes = require('./router/userRoutes')
const postRoutes = require('./router/postRoutes')

//const {verify_token} = require('./middleware/authMiddleware')


//middleware...
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'));
app.use((req,res,next)=> {
    console.log(req.path)
    next()
})

//routes...
app.use('/api/authUser', authRoutes )
app.use('/api/user', userRoutes )
app.use('/api/post', postRoutes )


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

