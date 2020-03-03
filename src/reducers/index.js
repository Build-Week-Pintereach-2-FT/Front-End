import {
    FETCHING_DATA,
    SET_ERROR,
    LOGIN, 
    NEW_USER,
    EDIT_USER,
    SET_BOARDS,
    SET_ARTICLES,
    UPDATE_BOARDS,
    UPDATE_ARTICLES
} from '../actions/actions';

const initialState = {
    isLoading: false,
    user: {},
    boards: [],
    articles: [],
    error: null
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
                user: action.payload,
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
        
        default:
             return state
    }
}
