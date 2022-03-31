import {
   SET_USER_DATA,
   SET_USER_LOGGED
} from './actionTypes';
/**
 * 
 * @param {*} isLogged 
 * @returns set user login state
 */
export const setUserLogged =(isLogged)=>{
   return{
      type: SET_USER_LOGGED,
      isLogged
   }
}
/**
 * set user Data
 */
 export const setUserData =(userData)=>{
   return{
      type: SET_USER_DATA,
      userData
   }
}