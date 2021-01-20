import React, {useState,useEffect} from 'react'
// import PropTypes from 'prop-types'
import {withRouter,Link}  from 'react-router-dom'
import { Fragment } from 'react';
import { useDispatch,useSelector} from 'react-redux'
import {CreateProfil,getCurrentProfile} from '../../actions/profile'
export const EditProfile = ({history}) => {
    const [formData, setFormData]= useState({
        location:'',
        status:'',
        bio:'',
        skills:'',
        facebook:'',
        twitter:'',
        instagram:'',
        linkedin:'',
        youtube:'',
    });
     const {location,
     status,
     bio,
     skills,
     facebook,
     twitter,
     instagram,
     linkedin,
     youtube}=formData
    const [displaySocialInputs,toggleSocialInputs]=useState(false)
   
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
      }
      const dispatch  = useDispatch()
      const profile = useSelector(state => state.profile.profile)

   
      const loading = useSelector(state => state.profile.loading)
      const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(CreateProfil(formData,history,true));
      }
      useEffect(() => {
       dispatch(getCurrentProfile());
       setFormData({
       location: loading|| !profile.location?'':profile.location,
         status:loading|| !profile.status?'':profile.status,
         bio:loading|| !profile.bio?'':profile.bio,
         skills:loading|| !profile.skills?'':profile.skills.join(','),
         facebook:loading|| !profile.facebook?'':profile.facebook,
         twitter:loading|| !profile.twitter?'':profile.twitter,
         instagram:loading|| !profile.instagram?'':profile.instagram,
         linkedin:loading|| !profile.linkedin?'':profile.linkedin,
         youtube:loading|| !profile.youtube?'':profile.youtube, 
       })

    }, [loading])
     return (
        <Fragment>
            <h1 class="large text-primary">
        Edit Your Profile
      </h1>
            <small id="small">* =required field</small> 
       <form className="form">
         <div id='location'className="form-group">
        <input type="text"  onChange={handleChange} name='location'value={location} placeholder="Location"/>
       <small  className="form-text">City & state suggested (eg.Tunisia,Tunis)</small>
        </div>
        <div   id='status'  className="form-group">
        <select   value={status} onChange={handleChange} name="status">
            <option value="0">* Select Professional Status</option>
            <option value="Professor">Professor</option>
            <option value="Student">Student</option>
        </select>
        </div>
        <div id='skills'className="form-group">
        <input type="text"   value={skills} onChange={handleChange} name='skills' placeholder="* Skills"/>
       <small  className="form-text">Please use comma separated values (eg. Html,Css,JavaScript)</small>
        </div>
        <div  id='bio'  className="form-group">
        <textarea name='bio' value={bio} onChange={handleChange} placeholder="A short bio of yourself"/>
       <small  className="form-text">Tell us a little about yourself</small>
        </div>
        <div class="my-2">
          <button onClick={()=>toggleSocialInputs(!displaySocialInputs)} type="button" class="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
          {displaySocialInputs && <Fragment>

            <div className="form-group social-input">
        <i className="fab fa-facebook fa-2x"></i>
        <input type="text"  value={facebook} onChange={handleChange} class="form-control" name='facebook' placeholder="Facebook URL"/>
        </div>
        <div class="form-group social-input">
        <i class="fab fa-twitter fa-2x"></i>
        <input type="text" value={twitter} onChange={handleChange} class="form-control" name='twitter' placeholder="Twitter URL"/>
        </div>
        <div class="form-group social-input">
        <i class="fab fa-instagram fa-2x"></i>
        <input type="text" value={instagram} onChange={handleChange} class="form-control" name='instagram' placeholder="Instagram URL"/>
        </div>
        <div class="form-group social-input">
        <i class="fab fa-linkedin fa-2x"></i>
        <input type="text" value={linkedin} onChange={handleChange} class="form-control" name='linkedin' placeholder="Linkedin URL"/>
        </div>
        <div class="form-group social-input">
        <i class="fab fa-youtube fa-2x"></i>
        <input type="text" value={youtube}  onChange={handleChange}class="form-control" name='youtube' placeholder="Youtube URL"/>
        </div>
        

              </Fragment>}
        </div>
        
         <button onClick={handleSubmit} type="submit" class="btn btn-primary my-1">Submit</button>
         <Link class="btn btn-light my-1" to="/dashboard">Go Back</Link>
         </form>
         </Fragment>
         
     )
 };



export default withRouter(EditProfile)
