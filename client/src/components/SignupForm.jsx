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
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
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
    <div className="login-form-container" style={{
      maxWidth: "900px",
      marginLeft: 'auto',
      marginRight: 'auto',
      overflowY: 'auto'
    }}>
      <div className="title-container">
        <div className="title"  style={{
        padding: '8%',
        background: 'red',
        color: 'white',
        opacity: '0.5'
      }}>
          <span>BloodSaver</span>
        </div>
      </div>
      <div className="login-form">
        <form
          onSubmit={handleSignUpForm}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '50% 50%',
            gridColumnGap: '10px'
          }}>
          <input placeholder="Full Name *" type="text" required onChange={(e)=>handleInput(e, "name")}/>
          <input placeholder="Phono No. *" type="text" required onChange={(e)=>handleInput(e, "phone")}/>
          <input placeholder="Address *" type="text" required onChange={(e)=>handleInput(e, "address")}/>
          <select
          required 
          value={formData['gender'] || ""} 
          onChange={(e)=>handleInput(e, "gender")} 
          >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          </select>
          <select 
            required
            value={formData['blood_group'] || ""} 
            onChange={(e)=>handleInput(e, "blood_group")} 
          >
          <option value="">Select blood group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          </select>
          <input placeholder="Email Address *" type="text" required onChange={(e)=>handleInput(e, "email")}/>
          <input type="password" placeholder="Password *" required onChange={(e)=>handleInput(e, "password")}/>
          </div>
          <input style={{}} type="submit" value="SignUp"/>
        </form>
      </div>
      <div className="err-boundary">
          <h3>{validationErr?.mailErr}</h3>
          <h3>{validationErr?.passErr}</h3>
          <h3>{validationErr?.nameErr}</h3>
        </div>
      <div className="signup-button" style={{
        
      }}>
        <button
          onClick={() => {
            setRedirectLogin(true);
          }}
          style={{
            marginLeft: '-12%'
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
