const express = require('express')
const router = express.Router()
const {register, login, upload} = require('../controller/authController')

//register...
router.post('/register', upload.single('profilePhoto'), register)

//login...
router.post('/login', login)

module.exports = router

