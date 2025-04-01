const express = require('express')
const router = express.Router()
const {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controller/userController')

//get all users
router.get('/getAllUsers', getAllUsers)

//get a single user by id
router.get('/getSingleUser', getUserById)

//update user
router.patch('/updateUser', updateUser)

//delete user
router.delete('/deleteUser', deleteUser)


module.exports = router