import React from 'react';
import { connect } from 'react-redux';
import {
   Route,
   BrowserRouter,
   Routes,
   Navigate
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Donors from './pages/donors/Donors';
import { Login } from './pages/login/component';
import { Signup } from './pages/signup/component';
import { Welcome } from './pages/welcome/component';

function App({_isLogged}) {
  return (
    <>
     { _isLogged && <Navbar/>}
     <BrowserRouter>
       <Routes>
       <Route exact path='/' element = { _isLogged ? <Donors/> : <Login/> }/>
          {/* <Route exact path='/' element = { _isLogged ? <Welcome/> : <Login/> }/> */}
          <Route path='/login' element = { _isLogged ? <Navigate to = "/"/>: <Login/> }/>
          <Route path='/signup' element = { _isLogged ? <Navigate to = "/"/>: <Signup/> }/>
       </Routes>
     </BrowserRouter>
     </>
  )
}
const _mapStateToProps = (state)=>{
  const isLogged  = state["pages/login"].isLogged;
  return{
      _isLogged: isLogged
  }
}

export default connect(_mapStateToProps)(App)
