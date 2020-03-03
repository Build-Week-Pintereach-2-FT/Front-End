import axios from 'axios'

export const axiosWithAuth = () => {
    //get token from localstorage
    const token = window.localStorage.getItem('token');

    //create a new "instance" of axios with the config object built into it
    return axios.create({
        //config object
        baseURL: '', //to be determined with backend
        headers: {
            authorization: token
        }
    })
}