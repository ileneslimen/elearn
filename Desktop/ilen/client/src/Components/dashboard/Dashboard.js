import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCurrentProfile} from '../../actions/profile'
import Spinner from '../layout/spinner'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'




const Dashboard=({getCurrentProfile, auth: {user}, profile:{profile, loading}})=>{
    useEffect(()=>{
        getCurrentProfile()
    },[]);
    return(
  loading && profile ===null ? <Spinner/>: <Fragment>
     <h1 className='dash'>Dashboard</h1>
     <p><i class="fas fa-user"></i> Welcome {user && user.name}</p>
     {profile!==null ? <Fragment>has </Fragment>:
      <Fragment> <p className='small'>You have not yet set a profile, please add some info</p> 
      <Link to='/create-profile' className='btn btn-primary'> Create profile </Link></Fragment> }
      <Link activeClassName="active" to="/upload" >
          Home
        </Link>
        <Link activeClassName="active" to="/list">
          Files List
        </Link>
 
  </Fragment>
  
    )
}
Dashboard.propTypes={
getCurrentProfile:PropTypes.func.isRequired,
auth:PropTypes.object.isRequired,
profile:PropTypes.object.isRequired
}
const mapStateToProps=state=>({
auth: state.auth,
profile: state.profile
})
export default connect(mapStateToProps, {getCurrentProfile})(Dashboard)