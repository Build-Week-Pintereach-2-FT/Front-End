import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import history from '../utils/history';

export const FETCHING_DATA = "FETCHING_DATA";
export const SET_ERROR = "SET_ERROR";
export const LOGIN = "LOGIN";

export const SET_BOARDS = "SET_BOARDS";
export const SET_ARTICLES = "SET_ARTICLES";
export const UPDATE_BOARDS = "UPDATE_BOARDS";
export const UPDATE_ARTICLES = "UPDATE_ARTICLES";
export const UPDATE_SELECTEDBOARD = "UPDATE_SELECTEDBOARD";

export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const DELETE_BOARD = "DELETE_BOARD";
export const EDIT_BOARD = "EDIT_BOARD";
export const EDIT_ARTICLE = "EDIT_ARTICLE";
export const LOGOUT = "LOGOUT";

export const login = (item) => dispatch => {
    dispatch({type: FETCHING_DATA})

    axiosWithAuth()
        .post('api/users/login', item)
            .then(response => {
                dispatch({type: LOGIN, payload: response.data.message})

                //set token to local storage here as well
                window.localStorage.setItem('token', response.data.token)
                history.push(`/UserDashboard`)
            })   
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error.data})
            })

}

export const createNewUser = (item) => dispatch => {

    dispatch({type: FETCHING_DATA})

    axios
        .post('https://pintereach2bw4.herokuapp.com/api/users/register', item)
            .then(response => {
                history.push(`/SignIn`)
            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error.data})
            })
}

export const createNewBoard = (item) => dispatch => {

    dispatch({type: FETCHING_DATA})

    axiosWithAuth()
        .post('/api/boards', item)
            .then(response => {
                dispatch({type: UPDATE_BOARDS, payload: response.data[0]})
                history.push(`/UserDashboard`)
            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error.data})
            })
}

export const createNewArticle = (item) => dispatch => {

    dispatch({type: FETCHING_DATA})

    axiosWithAuth()
        .post('/api/articles', item)
            .then(response => {
                dispatch({type: UPDATE_ARTICLES, payload: response.data[0]})
                history.push(`/ArticleList`) 
            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error.data})
            })
}


//get a list of all boards created
export const getAllBoards = () => dispatch => {

    dispatch({type: FETCHING_DATA})

    axios
        .get('https://pintereach2bw4.herokuapp.com/api/boards')
            .then(response => {
                dispatch({type: SET_BOARDS, payload: response.data})

            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error.data})
            })

}


// //get a list of all articles created 
export const getAllArticles = () => dispatch => {

    dispatch({type: FETCHING_DATA})

    axios
        .get('https://pintereach2bw4.herokuapp.com/api/articles')
            .then(response => {
                dispatch({type: SET_ARTICLES, payload: response.data})

            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error.data})
            })

}


//get a list of boards that belong to a specific user using the user's id number
export const getUserBoards = (id) => dispatch => {

    dispatch({type: FETCHING_DATA})

    axiosWithAuth()
        .get('/api/boards')
            .then(response => {

                let specificUserBoards = [];

                response.data.map(board => {
                    if (board.userId == id) {
                        specificUserBoards.push(board)
                    }
                })

                dispatch({type: SET_BOARDS, payload: specificUserBoards})

            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error.data})
            })

}


// //get a list of articles that belong to a specific board using the board's id number
export const getBoardArticles = (id) => dispatch => {

    dispatch({type: FETCHING_DATA})

    axios
        .get(`https://pintereach2bw4.herokuapp.com/api/articles`)
            .then(response => {

                let specificBoardArticles = [];

                response.data.map(article => {
                    if (article.boardId == id) {
                        specificBoardArticles.push(article)
                    }
                })

                dispatch({type: SET_ARTICLES, payload: specificBoardArticles})

            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error.data})
            })

}

// //delete a board
// //possibly create a loop to delete all articles associated with given board as well?
export const deleteBoard = (id) => dispatch => {
    dispatch({type: FETCHING_DATA})

    axiosWithAuth()
        .delete(`/api/boards/${id}`)
            .then(response => {
                dispatch({type: DELETE_BOARD, payload: id})
            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error.data})
            })
}

//delete an article
export const deleteArticle = (id) => dispatch => {
    dispatch({type: FETCHING_DATA})

    axiosWithAuth()
        .delete(`/api/articles/${id}`)
            .then (response => {
                dispatch({type: DELETE_ARTICLE, payload: id})
            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error.data})
            })
}


//edit a board 
export const editBoard = (id, editedBoard) => dispatch => {
    dispatch({type: FETCHING_DATA});

    axiosWithAuth()
        .put(`/api/boards/${id}`, editedBoard)
            .then(response => {
                dispatch({type: EDIT_BOARD, payload: editedBoard})
            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error.data})
            })
}

//edit an article
export const editArticle = (id, editedArticle) => dispatch => {
    dispatch({type: FETCHING_DATA});
    
    axiosWithAuth()
        .put(`/api/articles/${id}`, editedArticle)
        .then(response => {
            dispatch({type: EDIT_ARTICLE, payload: editedArticle})
        })
        .catch(error => {
            dispatch({type: SET_ERROR, payload: error.data})
        })
}


//set selected board for view of articles
export const setSelectedBoard = (id) => dispatch => {
    dispatch({type: UPDATE_SELECTEDBOARD, payload: id})
}

//logout
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
    window.localStorage.clear();
    history.push('/');
}