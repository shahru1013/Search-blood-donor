import { combineReducers } from 'redux';
import { reducer as loginReducer } from '../pages/login';

export default combineReducers({
    "pages/login": loginReducer
});