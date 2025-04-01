const postModel = require('../model/postModel')

const getAllPost = async (req, res)=> {
    try{
        const posts = await postModel.find()
        res.status(200).json(posts)
    }catch(error){
        res.status(500).json({error:error})
    }
}

const getSinglePost = async (req, res)=> {
    const postId = req.params
    try{
        const post = await postModel.findById({_id:postId})
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({error:error})
    }
}

const createPost = async (req, res)=> {
    const {title, description, user, postImage} = req.body
    try{
        const post = await postModel.create({title, description, user, postImage})
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({error:error})
    }
}

const updatePost = async (req, res)=> {
    const postId = req.params
    try{
        const post = await postModel.findByIdAndUpdate({_id:postId}, {...req.body})
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({error:error})
    }
}

const deletePost = async (req, res)=> {
    const postId = req.params
    try{
        const post = await postModel.findByIdAndDelete({_id:postId})
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({error:error})
    }
}

module.exports = {
    getAllPost,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
}