import React from 'react'
import {Link} from 'react-router-dom'
import {Fragment} from 'react'
import {connect,useSelector} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth'

const NavBar =({auth:{isAuthenticated, loading}, logout})=>{
const profile = useSelector(state => state.profile.profile)
  const stat=profile && profile.status

  const authLinks=(  
    stat&& profile.status==='Professor'? (
    <div class="et-hero-tabs-container">
        <i className="fas fa-user "/>{' '}
    <Link class="et-hero-tab" to="/dashboard" >Dashboard</Link>
    <Link class="et-hero-tab" to="/profiles" >Profiles</Link>
    <Link class="et-hero-tab" to="/upload" >Upload Courses</Link> 
    <Link class="et-hero-tab" to="/list" >Courses</Link>  
    <Link class="et-hero-tab" to="/posts" >Community</Link>  
    <span class="et-hero-tab-slider"></span>
    <i className="fas fa-sign-out-alt"></i>{' '}
    <a onClick={logout} href='#!' >Log Out </a> 
    </div>
    )
    
    
    
    :(
    <div class="et-hero-tabs-container">
    <i className="fas fa-user "/>{' '}
<Link class="et-hero-tab" to="/dashboard" >Dashboard</Link>
<Link class="et-hero-tab" to="/profiles" >Profiles</Link>  
<Link class="et-hero-tab" to="/list" >Courses</Link> 
<Link class="et-hero-tab" to="/posts" >Community</Link>  
<span class="et-hero-tab-slider"></span>
<i className="fas fa-sign-out-alt"></i>{' '}
<a onClick={logout} href='#!' >Log Out </a> 
</div>))
     const guestLinks=(
      <div class="et-hero-tabs-container">
         
           <Link class="et-hero-tab"  to="/register" >Sign Up</Link>
          <Link class="et-hero-tab" to="/login" >Sign In</Link> 
           <span class="et-hero-tab-slider"></span>
            
        </div>
      )
  return (

      <div>
  
    <section class="et-hero-tabs">
    <h1>STICKY SLIDER NAV</h1>
    <h3>Sliding content with sticky tab nav</h3>
  <div class="et-hero-tabs-container">
   <Link class="et-hero-tab" to="/" >We-Lean </Link> 
    <span class="et-hero-tab-slider"></span>
    {!loading && (<Fragment className='bar' >{isAuthenticated ? authLinks: guestLinks}</Fragment>)}

   
  </div>

</section>


</div>
  )

}
NavBar.propTypes={
  logout:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}
const mapStateToProps =state =>({
  auth:state.auth
})
export default connect(mapStateToProps,{logout})(NavBar);