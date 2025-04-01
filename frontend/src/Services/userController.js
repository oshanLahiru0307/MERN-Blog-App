import axios from 'axios'
const BASE_URL = 'http://localhost:4000/api/user'

class UserController {

    static async getAllUsers(){
        try{
            const response = await axios.get(BASE_URL)
            console.log(response.data)
        }catch(error){
            console.log('error while fetching users', error)
        }
    }

    static async getSingleUser(userId){
        try{
            const response = await axios.get(`${BASE_URL}/${userId}`)
            console.log(response.data)
        }catch(error){
            console.log('error while fetching user', error)
        }
    }

    static async updateUser(userId, data){
        try{
            const response = await axios.patch(`${BASE_URL}/${userId}`, data)
            console.log(response.data)
        }catch(error){
            console.log('error while updating user', error)
        }
    }

    static async deleteUser(userId){
        try{
            const response = await axios.delete(`${BASE_URL}/${userId}`)
            console.log(response.data)
        }catch(error){
            console.log('error while deleting user', error)
        }
    }

}

export default UserController