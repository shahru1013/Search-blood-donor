import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../styles/login.css";
export default function SignupForm() {
  const [redirectSignin, setRedirectSignin] = useState(false);
  return (
    <div className="login-form-container">
      <div className="title-container">
        <div className="title">
          <span>SignUp</span>
        </div>
      </div>
      <div className="login-form">
        <form
          onSubmit={() => {
             
          }}
        >
          <input placeholder="Full Name *" type="text" required />
          <input placeholder="Email Address *" type="text" required />
          <input type="password" placeholder="Password *" required />
          <input type="submit" value="SignUp"/>
        </form>
      </div>
      <div className="signup-button">
        <button
          onClick={() => {
            setRedirectSignin(true);
          }}
        >
          Already have an account? Login
        </button>
      </div>
      {redirectSignin && <Navigate to="/login" />}
    </div>
  );
}
