import {
    FETCHING_DATA,
    SET_ERROR,
    LOGIN, 
    SET_BOARDS,
    SET_ARTICLES,
    UPDATE_BOARDS,
    UPDATE_ARTICLES,
    UPDATE_SELECTEDBOARD,
    DELETE_ARTICLE,
    DELETE_BOARD, 
    EDIT_BOARD,
    EDIT_ARTICLE,
    LOGOUT
} from '../actions/actions';

const initialState = {
    isLoading: false,
    user: {id: null},
    boards: [],
    articles: [],
    error: null,
    selectedBoard: null
}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        //set isLoading to true
        case FETCHING_DATA:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        //set error
        case SET_ERROR: 
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }

        //set user upon login
        case LOGIN: 
            return {
                ...state,
                user: {id: action.payload},
                isLoading: false,
                error: null
            }

        //set board array state
        case SET_BOARDS: 
            return {
                ...state,
                isLoading: false,
                boards: action.payload
            }

        //set article array state
        case SET_ARTICLES:
            return {
                ...state,
                isLoading: false,
                articles: action.payload
            }

        //edit boards array to add a new board obj
        case UPDATE_BOARDS:
            return {
                ...state,
                boards: [...state.boards, action.payload]
            }
        
        //edit articles array to adda new article obj
        case UPDATE_ARTICLES:
            return {
                ...state,
                articles: [...state.articles, action.payload]
            }
        
        //update selected board, to keep track of view of articles
        case UPDATE_SELECTEDBOARD: 
            return {
                ...state,
                selectedBoard: action.payload
            }

        //update state adjusting for deleted article
        case DELETE_ARTICLE: 
            return {
                ...state,
                articles: state.articles.filter(article => (
                    article.id !== action.payload
                ))
            }

        //update state adjusting for deleted board
        case DELETE_BOARD: 
            return {
                ...state,
                boards: state.boards.filter(board => (
                    board.id != action.payload
                ))
            }

        //update state adjusting for edited board
        case EDIT_BOARD: 
            return {
                ...state,
                boards: state.boards.map(board => {
                     if (board.id === action.payload.id) {
                         return action.payload
                     }
                     else {
                         return board;
                     }
                })
            }

        //update state adjusting for edited article
        case EDIT_ARTICLE:
            return {
                ...state,
                articles: state.articles.map(article => {
                     if (article.id === action.payload.id) {
                         return action.payload
                     }
                     else {
                         return article;
                     }
                })
            }

        //logout reset
        case LOGOUT: 
            return {
                isLoading: false,
                user: {id: null},
                boards: [],
                articles: [],
                error: null,
                selectedBoard: null
            }
        default:
             return state
    }
}


// //maybe change initial state to have an allBoards: [ [{},{}] ] and userBoards: [ [{}, {}] ]
// //waiting to see if there is backend functionality for getting articles associated with specific board id

// //to update for a new board or initial render
// return {
//     ...state,
//     userBoards: [...state.userBoards, action.payload]
// }

// //to update for a new article
// //payload: {id: id, 
// //          data: response.data //should be an article object
// //          } can send multiple items in a payload
// return {
//     ...state,
//     userBoards: state.userBoards.map(board => {
//         //if boardId == payload id, then that's the specific board that the article gets added to
//         {board.id == action.payload.id 
//             ? [...board, action.payload.data] 
//             : [...board]
//         }
//     })
// }
