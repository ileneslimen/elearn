import React, {Fragment, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {login} from '../../actions/auth'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
   
  } from "reactstrap";
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
   return  ( <Fragment>
      
        <Form onSubmit={e=>onSubmit(e)}>
    <FormGroup>
  
     
      <Label for="email">Email address </Label>
      <Input
        className="mb-3"
        type="email"
        name="email"
        id="email"
        placeholder="Email "
        value={email}
        required
        onChange={e =>onChange(e)}
       
      />
      <Label for="password">Password </Label>
      <Input
        className="mb-3"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={password}
        required
        onChange={e =>onChange(e)}
       
      />
   
      <Button color="primary" style={{ marginTop: "2rem" }}>
       Log In{" "}
      </Button>
    </FormGroup>
  </Form>
  <p className='sign'>Don't have an account? <Link to='/register'>Sign Up</Link></p>
  </Fragment>
   )}

   const mapStateToProps=state=>({
     isAuthenticated:state.auth.isAuthenticated
   })
export default connect(mapStateToProps, {login})(Login)