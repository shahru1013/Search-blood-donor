import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { validateFormData } from "../pages/login/functions";
import "../styles/login.css";
import { registerUser } from "../pages/signup/functions";
import { ToastContainer, toast } from 'react-toastify';

export default function SignupForm() {
  const [formData, setFormData] = useState({});
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [validationErr, setValidationErr] = useState({});
  const handleSignUpForm= async (e)=>{
     e.preventDefault();
     setValidationErr({});
     const validateResult = validateFormData(formData?.email, formData?.password, formData?.name);
     if(Object.keys(validateResult).length){ 
       setErrMessage(validateResult);
     }else{
       /**Handle what if signup success */
       const isDataSaved = await registerUser(formData, axios);
       if(isDataSaved) {
         toast("SignUp successfull!");
         setTimeout(()=>{
           setRedirectLogin(true);
         },2000)
      }else{
         toast("Something wrong! please try again!");
      }
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
  return (
    <div className="login-form-container">
      <div className="title-container">
        <div className="title">
          <span>SignUp</span>
        </div>
      </div>
      <div className="login-form">
        <form
          onSubmit={handleSignUpForm}
        >
          <input placeholder="Full Name *" type="text" required onChange={(e)=>handleInput(e, "name")}/>
          <input placeholder="Email Address *" type="text" required onChange={(e)=>handleInput(e, "email")}/>
          <input type="password" placeholder="Password *" required onChange={(e)=>handleInput(e, "password")}/>
          <input type="submit" value="SignUp"/>
        </form>
      </div>
      <div className="err-boundary">
          <h3>{validationErr?.mailErr}</h3>
          <h3>{validationErr?.passErr}</h3>
          <h3>{validationErr?.nameErr}</h3>
        </div>
      <div className="signup-button">
        <button
          onClick={() => {
            setRedirectLogin(true);
          }}
        >
          Already have an account? Login
        </button>
      </div>
      {redirectLogin && <Navigate to="/login" />}
      <div className="toast-mesage">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </div>
    </div>
  );
}
