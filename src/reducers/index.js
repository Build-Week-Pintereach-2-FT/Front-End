import {
    FETCHING_DATA,
    SET_ERROR,
    LOGIN, 
    NEW_USER,
    EDIT_USER
} from '../actions/actions';

const initialState = {
    isLoading: false,
    user: {},
    boards: [],
    error: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        //set isLoading to true
        case FETCHING_DATA:
            return {
                ...state,
                isLoading: true
            }

        //set error
        case SET_ERROR: 
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
    }
}