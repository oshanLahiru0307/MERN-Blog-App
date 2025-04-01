const { get } = require('mongoose')
const userModel = require('../model/blogUserModel')


const getAllUsers = async(req, res) => {

    try{
        const users = await userModel.find()
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({error:error})
    }
}

const getUserById = async (req, res)=> {
    const userId = req.params

    try{
        const user = await userModel.findById({_id:userId})
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({error:error})
    }
}

const updateUser = async (req, res)=> {
    const userId = req.params
    try{
        const updatedUser = await userModel.findByIdAndUpdate({_id:userId},{...req.body})
        res.status(200).json({updatedUser})
    }catch(error){
        res.status(500).json({error:error})
    }
}

const deleteUser = async (req, res)=> {
    const userId = req.params
    try{
        const deletedUser = await userModel.findByIdAndDelete({_id:userId})
        res.status(200).json({deletedUser})
    }catch(error){
        res.status(500).json({error:error})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}