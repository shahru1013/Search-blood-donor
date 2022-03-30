import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../styles/login.css";
export default function LoginForm() {
  const [redirectSignup, setRedirectSignup] = useState(false);
  return (
    <div className="login-form-container">
      <div className="title-container">
        <div className="title">
          <span>SignIn</span>
        </div>
      </div>
      <div className="login-form">
        <form
          onSubmit={() => {
            
          }}
        >
          <input placeholder="Email Address *" type="text" required />
          <input type="password" placeholder="Password *" required />
          <input type="submit" />
        </form>
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
