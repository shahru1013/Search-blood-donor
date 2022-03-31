import React from 'react'
import { connect } from 'react-redux'
import '../../../styles/welcome.css';
function Welcome({ _userData }) {
  return (
    <div className="welcome">
        <h1>Hello {_userData.name}</h1>
    </div>
  )
}

const _mapStateToProps = (state)=>{
   return{
     _userData: state["pages/login"].userData
   }
}

export default connect(_mapStateToProps)(Welcome)