import { combineReducers } from 'redux';
import { reducer as loginReducer } from '../pages/login';
import { reducer as donorReducer } from '../pages/donors';

export default combineReducers({
    "pages/login": loginReducer,
    "pages/donors": donorReducer
});