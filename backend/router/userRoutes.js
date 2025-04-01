const express = require('express')
const router = express.Router()
const {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controller/userController')

//get all users
router.get('/', getAllUsers)

//get a single user by id
router.get('/:id', getUserById)

//update user
router.patch('/:id', updateUser)

//delete user
router.delete('/:id', deleteUser)


module.exports = router