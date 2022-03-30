import {
   SET_USER_LOGGED
} from './actionTypes';

const DEFAULT_STATE = {
    isLogged: false
}

/**
 * state - The cureent states of redux
 * action - Dispatching actions
 */
export default (state = DEFAULT_STATE, action) =>{
    switch (action.types) {
        case SET_USER_LOGGED:
            return{
                ...state,
                isLogged: !action.isLogged
            }
    
        default:
            return state;
    }
}