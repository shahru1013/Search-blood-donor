import React, { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux'
import { checkUserValidity, validateLoginData } from "../pages/login/functions";
import "../styles/login.css";
import { setUserLogged , incr} from "../pages/login/action";

function LoginForm( { updateLogin } ) {
  const [redirectSignup, setRedirectSignup] = useState(false);
  const [validationErr, setValidationErr] = useState({});
  const [formData, setFormData] = useState({});

  const handleLoginForm= async (e)=>{
     e.preventDefault();
     setValidationErr({});
     const validateResult = validateLoginData(formData?.email, formData?.password);
     if(Object.keys(validateResult).length){ 
       setErrMessage(validateResult);
     }else{
       const loginStatus = await checkUserValidity(formData,axios);
       if(loginStatus){
          setFormData({})
          updateLogin(true);
       }
       /**Handle what if login success */
     }
  }
  const setErrMessage=(message)=>{
      setValidationErr(message)
  }
  const handleInput=(e, type) =>{
     setFormData({
       ...formData,
       [type]: e.target.value
     })
  }

  useEffect(()=>{
  },[validationErr])
  return (
    <div className="login-form-container">
      <div className="title-container">
        <div className="title">
          <span onClick={()=>console.log('ha',validationErr)}>SignIn</span>
        </div>
      </div>
      <div className="login-form">
        <form
          onSubmit={handleLoginForm}
          >
          <input placeholder="Email Address *" type="text" onChange={(e)=>handleInput(e,"email")} value={formData?.email || ""} required />
          <input type="password" placeholder="Password *"  onChange={(e)=>handleInput(e,"password")} value={formData?.password || ""} required />
          <input type="submit" />
        </form>
      </div>
      <div className="err-boundary">
          <h3>{validationErr?.mailErr}</h3>
          <h3>{validationErr?.passErr}</h3>
        </div>
      <div className="signup-button">
        <button
          onClick={() => {
            setRedirectSignup(true);
          }}
        >
          Don't have an account? sign up
        </button>
      </div>
      {redirectSignup && <Navigate to="/signup" />}
    </div>
  );
}

const _mapDispatchToProps = (dispatch) =>{
    return{
       updateLogin: (val)=>{
         dispatch(setUserLogged(val))
       },
    }
}
export default connect(null,_mapDispatchToProps)(LoginForm);