import axios from 'axios';
const BASE_URI = 'http://localhost:4000/api/authUser';

class authController {

    static async userLogin(data) {
        try {
            const response = await axios.post(`${BASE_URI}/login`, data);
            return response.data
        } catch (error) {
            console.error('Error while loggin:',error)
            throw error
        }
    }

    static async userRegister(data){
        try{
            const response = await axios.post(`${BASE_URI}/register`, data);
            return response.data
        }catch(error){
            console.error('Error while registering:',error)
            throw error
        }
    }
}



export default authController;