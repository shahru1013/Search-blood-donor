/**
 * User Validity
 */

 export const registerUser = async (formData, axios) =>{
    /**
     * handle API
     * -api/login/validity
     */
  const isDataSaved = await axios.post('/api/signup/addUser',{formData});
  return await isDataSaved.data.res;
}