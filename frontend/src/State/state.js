import {proxy} from 'valtio'

const user = JSON.parse(localStorage.getItem('user'))
const token = localStorage.getItem('token')

const state = proxy({
    currentUser:user,
    token:token
})

export default state