import {
   SET_USER_LOGGED,
   SET_USER_DATA,
} from './actionTypes';

const DEFAULT_STATE = {
    isLogged: false,
    userData:{}
}

/**
 * state - The cureent states of redux
 * action - Dispatching actions
 */
export default (state = DEFAULT_STATE, action) =>{
    switch (action.type) {
        case SET_USER_LOGGED:
            return{
                ...state,
                isLogged: action.isLogged
            }
        case SET_USER_DATA:
            return{
                ...state,
                userData: action.userData
            }

        default:
            return state;
    }
}