/**
 * validate user login form data
 */
export const validateLoginData = (email, pass) =>{
    console.log(email,pass);
    let errMessages = {}
    const mailFormat = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    if(!mailFormat.test(email)) errMessages= {...errMessages, mailErr:"Invalid email!"};
    if(pass.length < 6) errMessages = {...errMessages, passErr: "Invalid password, must be 6 or more characters long!"}
    console.log(errMessages);
    return errMessages;
}

/**
 * User Validity
 */

export const checkUserValidity = async (creadential, axios) =>{
    /**
     * handle API
     */
  return false;
}