const express = require('express');
const app = express()
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { register, login } = require('../controller/authController');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store uploaded files in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename the file
  },
});

const upload = multer({ storage: storage });

//register...
router.post('/register', upload.single('profilePhoto'), register); // Apply multer middleware

//login...
router.post('/login', login);

module.exports = router;