import React from 'react'
import { connect } from 'react-redux'

function Welcome() {
  return (
    <div>Welcome Page</div>
  )
}

const _mapStateToProps = (state)=>{
   return{

   }
}

export default connect(_mapStateToProps)(Welcome)