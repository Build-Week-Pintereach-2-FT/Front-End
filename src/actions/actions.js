import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCHING_DATA = "FETCHING_DATA";
export const SET_ERROR = "SET_ERROR";
export const LOGIN = "LOGIN";
export const NEW_USER = "NEW_USER";
export const EDIT_USER = "EDIT_USER";
//fetching arrays/objects/etc (however backend is set up) and then setting that state as well

export const login = (item) => dispatch => {
    console.log('LOGIN: ', item);
    //dispatch({type: FETCHING_DATA})

    // axios
    //     .post('', item)
    //         .then(response => {
    //             console.log(response)
    //             dispatch({type: LOGIN, payload: response.data})
    //             //set token to local storage here as well
    //         })   
    //         .catch(error => {
    //             console.log(error)
    //             dispatch({type: SET_ERROR, payload: error.data})
    //         })

}

export const createNewUser = (item) => dispatch => {
    console.log("createNewUser: ", item);

    //dispatch({type: FETCHING_DATA})

    // axios
    //     .post('', item)
    //         .then(response => {
    //             dispatch({type: NEW_USER}, payload: response.data)
    //             history.push(`/signin`)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             dispatch({type: SET_ERROR, payload: error.data})
    //         })
}