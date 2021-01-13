import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';


const Register= ({setAlert, register, isAuthenticated}) => {
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
    return (
    <form class="form-contents" onSubmit={e=>onSubmit(e)}>
    <div class="fc">
        <input type="text"  required    onChange={e =>onChange(e)}
             
            label="name" value={name} name='name' />
        <label>Name</label>
    </div>
    <div class="fc">
        <input type="text" required   
                value={email}
               name='email'
                onChange={e =>onChange(e)} />
        <label>Email</label>
    </div>
    <div class="fc">
        <input type="text" required    
                value={password}
               name='password'
                onChange={e =>onChange(e)} />
        <label>Password</label>
    </div>
    <div class="fc">
        <input type="text" required    
                value={password2}
               name='password2'
                onChange={e =>onChange(e)} />
        <label>Confirm your password</label>
    </div>
    <div class="fc">
        <button>SUBMIT</button>
        <Link to= '/login' variant="body2">
                Already have an account? Sign in
              </Link>
    </div>
    
    
</form>
)}
const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated
  })
  export default connect(mapStateToProps,{setAlert, register})(Register);