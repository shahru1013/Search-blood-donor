import {
   SET_DONORS
} from './actionTypes';

const DEFAULT_STATE = {
   donors: []
}

/**
 * state - The cureent states of redux
 * action - Dispatching actions
 */
export default (state = DEFAULT_STATE, action) =>{
    console.log('act1', action.donors);
    switch (action.type) {
        case SET_DONORS:
            return{
                ...state,
                donors: action.donors
            }
        default:
            return state;
    }
}