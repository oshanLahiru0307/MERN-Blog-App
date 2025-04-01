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
router.get('/', getAllPost)

//get single post
router.get('/:id', getSinglePost)

//create new post
router.post('createPost', createPost)

//update post
router.patch('/:id', updatePost)

//delete post
router.delete('/:id', deletePost)

module.exports = router