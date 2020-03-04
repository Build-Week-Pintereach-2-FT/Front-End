import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth';

export const FETCHING_DATA = "FETCHING_DATA";
export const SET_ERROR = "SET_ERROR";
export const LOGIN = "LOGIN";
export const NEW_USER = "NEW_USER";
export const EDIT_USER = "EDIT_USER";

export const SET_BOARDS = "SET_BOARDS";
export const SET_ARTICLES = "SET_ARTICLES";
export const UPDATE_BOARDS = "UPDATE_BOARDS";
export const UPDATE_ARTICLES = "UPDATE_ARTICLES";

//fetching arrays/objects/etc (however backend is set up) and then setting that state as well

export const login = (item) => dispatch => {
    console.log('LOGIN: ', item);
    dispatch({type: FETCHING_DATA})

    axiosWithAuth()
        .post('api/users/login', item)
            .then(response => {
                console.log(response)
                dispatch({type: LOGIN, payload: response.data})
                //set token to local storage here as well
                window.localStorage.setItem('token', response.data.token)
            })   
            .catch(error => {
                console.log(error)
                dispatch({type: SET_ERROR, payload: error.data})
            })

}

export const createNewUser = (item) => dispatch => {
    console.log("createNewUser: ", item);

    dispatch({type: FETCHING_DATA})

    axios
        .post('https://pintereach2bw4.herokuapp.com/api/users/register', item)
            .then(response => {
                console.log(response)
                //dispatch({type: NEW_USER, payload: response.data})
                //history.push(`/SignIn`)
            })
            .catch(error => {
                console.log(error)
                dispatch({type: SET_ERROR, payload: error.data})
            })
}

export const createNewBoard = (item) => dispatch => {
    console.log("createNewBoard: ", item);

    //dispatch({type: FETCHING_DATA})

    // axiosWithAuth()
    //     .post('/api/boards', item)
    //         .then(response => {
    //             dispatch({type: UPDATE_BOARDS}, payload: response.data)
    //             history.push(`/boards`) <-- whatever URL they were currently on when adding?
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             dispatch({type: SET_ERROR, payload: error.data})
    //         })
}

export const createNewArticle = (item) => dispatch => {
    console.log("createNewArticle: ", item);

    //dispatch({type: FETCHING_DATA})

    // axiosWithAuth()
    //     .post('/api/articles', item)
    //         .then(response => {
    //             dispatch({type: UPDATE_ARTICLES}, payload: response.data)
    //             history.push(`/board/article`) <-- whatever URL they were currently on when adding?
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             dispatch({type: SET_ERROR, payload: error.data})
    //         })
}


//get a list of all boards created
// export const getAllBoards = () => dispatch => {

//     dispatch({type: FETCHING_DATA})

//     axios
//         .get('/api/boards')
//             .then(response => {
//                 console.log(response);
//                 dispatch({type: SET_BOARDS, payload: response.data})

//             })
//             .catch(error => {
//                 console.log(error)
//                 dispatch({type: SET_ERROR, payload: error.data})
//             })

// }


// //get a list of all articles created 
// export const getAllArticles = () => dispatch => {

//     dispatch({type: FETCHING_DATA})

//     axios
//         .get('/api/articles')
//             .then(response => {
//                 console.log(response);
//                 dispatch({type: SET_ARTICLES, payload: response.data})

//             })
//             .catch(error => {
//                 console.log(error)
//                 dispatch({type: SET_ERROR, payload: error.data})
//             })

// }


//get a list of boards that belong to a specific user using the user's id number
export const getUserBoards = (id) => dispatch => {

    dispatch({type: FETCHING_DATA})

    axiosWithAuth()
        .get(`/api/boards/${id}`)
        //.get(`/api/boards/3`)
            .then(response => {
                console.log(response);
                dispatch({type: SET_BOARDS, payload: response.data})

            })
            .catch(error => {
                console.log(error)
                dispatch({type: SET_ERROR, payload: error.data})
            })

}

// //get a list of articles that belong to a specific board using the board's id number
// export const getBoardArticles = (id) => dispatch => {

//     dispatch({type: FETCHING_DATA})

//     axios
//         .get(`/api/articles/${id}`)
//             .then(response => {
//                 console.log(response);
//                 dispatch({type: SET_ARTICLES, payload: response.data})

//             })
//             .catch(error => {
//                 console.log(error)
//                 dispatch({type: SET_ERROR, payload: error.data})
//             })

// }

// //delete a board
// //possibly create a loop to delete all articles associated with given board as well?
// // export const deleteBoard = (id) => dispatch => {
// //     dispatch({type: FETCHING_DATA})

// //     axiosWithAuth()
// //         .delete(`/api/boards/${id}`)
// //             .then(response => {
// //                 //GET all articles associated with board id .get(`/api/articles/${id}`)
// //             })
// //             .catch(error => {

// //             })
// // }

// //delete an article
// export const deleteArticle = (id) => dispatch => {
//     dispatch({type: FETCHING_DATA})

//     axiosWithAuth()
//         .delete(`/api/articles/${id}`)
//             .then (response => {
//                 history.push('/dashboard') //<-- whatever the URL is for their dashboard
//             })
//             .catch(error => {
//                 dispatch({type: SET_ERROR, payload: error.data})
//             })
// }
