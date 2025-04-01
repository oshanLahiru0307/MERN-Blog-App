const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema ({
    title:{
        type:String,
        require: true
    },
    description:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },

    postImage:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('blogPost', PostSchema)