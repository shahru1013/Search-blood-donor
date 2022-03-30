import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../../../components/LoginForm';
import  '../../../styles/login.css';
function Login() {
  return (
    <>
      <div className='login-container'>
            <LoginForm/>
      </div>
    </>
  )
}

const _mapStateToProps = (state)=>{
   return{

   }
}

export default connect(_mapStateToProps)(Login)