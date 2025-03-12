import {Proxy} from 'valtio'

const user = JSON.parse(localStorage.getItem('user'))
const token = localStorage.getItem('token')

const proxy = Proxy({
    currentUser:user,
    token:token
})

export default proxy