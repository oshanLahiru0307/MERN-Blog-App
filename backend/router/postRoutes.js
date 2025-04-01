const express = require('express')
const router = express.Router()
const {
    getAllPost,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
} = require('../controller/postController')

//get all posts
router.get('getAllPosts', getAllPost)

//get single post
router.get('getSinglePost', getSinglePost)

//create new post
router.post('createPost', createPost)

//update post
router.patch('updatePost', updatePost)

//delete post
router.delete('deletePost', deletePost)

module.exports = router