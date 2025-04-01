const userModel = require('../model/blogUserModel') // Corrected typo
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const register = async (req, res) => {
  try {
    const { name, email, password, contact, address } = req.body;
    const userExist = await userModel.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: 'Email is already registered' });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    let profilePhoto = null;

    if (req.file) {
      profilePhoto = req.file.filename;
    }

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
      contact,
      address,
      profilePhoto: profilePhoto,
    });
    const userObj = user.toObject();
    delete userObj.password;
    res.status(201).json(userObj);
  } catch (error) {
    console.error("Error in register function:", error);
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email: email }) // Corrected variable name
        if (!user) {
            return res.status(400).json({ message: "Invalid Email" })
        }
        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid Password" })
        }
        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET) // Corrected payload
        const userObj = user.toObject()
        delete userObj.password // Corrected password deletion
        res.status(200).json({ user: userObj, token })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}




module.exports = { register, login}