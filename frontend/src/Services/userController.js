import axios from 'axios'
import { patch } from '../../../backend/router/postRoutes'

const BASE_URL = 'http://localhost:4000/user'

class UserController {

    static async getAllPosts(){
        try{
            const response = await axios.get(BASE_URL)
            console.log(response.data)
        }catch(error){
            console.log('error while fetching data', error)
        }
    }

    static async getSinglePost(postId){
        try{
            const response = await axios.get(`${BASE_URL}/${postId}`)
            console.log(response.data)
        }catch(error){
            console.log('error while fetching the post', error)
        }
    }

    static async createPost(data){
        try{
            const response = await axios.create(BASE_URL, data)
            console.log(response.data)
        }catch(error){
            console.log('error while creating post', error)
        }
    }

    static async updatePost(postId, data){
        try{
            const response = await axios.patch(`${BASE_URL}/${postId}`, data)
            console.log(response.data)
        }catch(error){
            console.log('error while updating data', error)
        }
    }

    static async deletePost(postId){
        try{
            const response = await axios.delete(`${BASE_URL}/${postId}`)
            console.log(response.data)
        }catch(error){
            console.log('error while deleting post',error)
        }
    }

}

export default UserController