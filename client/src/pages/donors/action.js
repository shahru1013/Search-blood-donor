import {
   SET_DONORS
} from './actionTypes';
/**
 * 
 * @param {*} isLogged 
 * @returns set user login state
 */
export const setDonors =(donors)=>{
   return{
      type: SET_DONORS,
      donors
   }
}
