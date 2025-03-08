const userMOdel = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userModel = require('../model/userModel')

const register = async (req,res)=> {
    try{
        const {name, email,password, contact, address } = req.body
        const userExist = await userModel.findOne({email: email})
        if(userExist){
            return res.status(400).json({message: "EMail is already registered"})
        }
        hashedPassword = bcrypt.hash(password, 12)
        const user = await userModel.create({name, email,password:hashedPassword , contact, address})
        delete user.password   
        res.status(201).json(user)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const login = async (req,res) => {
    const {email, password} = req.body
    try{
        const user = await userModel.findOne({email: email}) 
        if(!user){
            return res.status(400).json({message:"Invalid Email"})
        }
        const matchPassword = await bcrypt.compare(password, user.password)
        if(!matchPassword){
            return res.status(400).json({message:"Invalid Password"})
        }
        const token = await jwt.sign({id:user}, process.env.JWT_SECRET)
        delete user.password
        res.status(200).json({user, token})

    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {register, login}


