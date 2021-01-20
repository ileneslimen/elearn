import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCurrentProfile,deleteAccount} from '../../actions/profile'
import Spinner from '../layout/spinner'




const Dashboard=({getCurrentProfile, auth: {user}, profile:{profile, loading}})=>{
    useEffect(()=>{
        getCurrentProfile()
    },[]);
   
    return(
      
  loading && profile ===null ? <Spinner/>: <div className='DashCont'>
  
     <h1 className='dash'>Dashboard</h1>
     <p><i class="fas fa-user"></i> Welcome {user && user.name}</p>
    
   
 
  </div>

    )
}
Dashboard.propTypes={
getCurrentProfile:PropTypes.func.isRequired,
deleteAccount:PropTypes.func.isRequired,
auth:PropTypes.object.isRequired,
profile:PropTypes.object.isRequired
}
const mapStateToProps=state=>({
auth: state.auth,
profile: state.profile
})
export default connect(mapStateToProps, {deleteAccount,getCurrentProfile})(Dashboard)