import React, {Fragment, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import PropTypes from 'prop-types';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
   
  } from "reactstrap";
const Register=({setAlert, register, isAuthenticated})=>{
   const [FormData, SetFormData]=useState({
       name:'',
       email:'',
       password:'',
       password2:''
   });
   const {name,email,password,password2}=FormData;
   const onChange=e=>SetFormData({...FormData, [e.target.name]:e.target.value})
   const onSubmit= async e=>{
       e.preventDefault();
       if (password!==password2){
           setAlert('passwords do not match','danger')}
      else {
         register({name,email,password})
}}
// redirect if logged in 
if (isAuthenticated){
  return <Redirect to="/dashboard" />
}
   return  ( <Fragment>
       <h1>Sign Up</h1>
       <p>Create your account</p>
        <Form onSubmit={e=>onSubmit(e)}>
    <FormGroup>
      <Label for="name">Name </Label>
      <Input
        className="mb-3"
        type="text"
        name="name"
        placeholder="Name "
        value={name}
        
        onChange={e =>onChange(e)}
        
      />
      <Label for="email">Email address </Label>
      <Input
        className="mb-3"
        type="email"
        name="email"
        id="email"
        placeholder="Email "
        value={email}
       
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
  
        onChange={e =>onChange(e)}
       
      />
       <Input
        className="mb-3"
        type="password"
        name="password2"
       
        placeholder="Confirm password"
        value={password2}
 
        onChange={e =>onChange(e)}
       
      />
      <Button color="primary" style={{ marginTop: "2rem" }}>
        Register{" "}
      </Button>
    </FormGroup>
  </Form>
  <p className='sign'>Already have an account? <Link to='/login'>Sign In</Link></p>
  </Fragment>
   )}

   Register.propTypes={
     setAlert:PropTypes.func.isRequired,
     register:PropTypes.func.isRequired,
     isAuthenticated:PropTypes.bool

   }
   const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated
  })
export default connect(mapStateToProps,{setAlert, register})(Register);