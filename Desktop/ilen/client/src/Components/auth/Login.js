import React, { useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {login} from '../../actions/auth'

const Login=({login, isAuthenticated})=>{
   const [FormData, SetFormData]=useState({
     
       email:'',
       password:'',
     
   });
   const {email,password}=FormData;
   const onChange=e=>SetFormData({...FormData, [e.target.name]:e.target.value})
   const onSubmit= async e=>{
       e.preventDefault();
      login(email,password);
         
}
// redirect if logged in 
if (isAuthenticated){
  return <Redirect to="/dashboard" />
}
   return  ( 
      
  <div class="login-box">
  <h2>Login</h2>
  <form onSubmit={e=>onSubmit(e)}>
    <div class="user-box">
    <input   name="email"
       
       value={email}
       required
       onChange={e =>onChange(e)} type="email"   />
      <label>Email</label>
    </div>
    <div class="user-box">
    <input type="password"   
        name="password"
        id="password"
       
        value={password}
        required
        onChange={e =>onChange(e)}  />
      <label>Password</label>
      <button type='submit'>Submit
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      </button>
    </div>
    <Link to= '/register' className="a">
                Dont have an account
       
              </Link>

  </form>
</div>
   )}
  

   const mapStateToProps=state=>({
     isAuthenticated:state.auth.isAuthenticated
   })
export default connect(mapStateToProps, {login})(Login)