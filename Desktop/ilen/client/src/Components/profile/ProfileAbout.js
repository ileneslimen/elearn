import React from 'react'
import { Fragment } from 'react'

 const ProfileAbout = ({profile}) => {
    let name=profile && profile.user && profile.user.name
    let bio=profile && profile.bio
  
    return (
        <div class="profile-about bg-light p-2">
            {bio &&
          ( <Fragment><h2 class="text-primary">{name.trim().split(' ')[0]}'s Bio</h2>
          <p>
      { bio}
          </p> </Fragment>)}
          <div className="line"></div>
          <h2 className="text-primary">Skill Set</h2>
          <div className="skills">
       {profile && profile.skills && profile.skills.map((skill,index)=>(
           <div key={index} className='p-1'>
               < i className='fas fa-check'></i>{skill} {' '}</div> 
       ))}
          </div>
        </div>
    )
}
export default ProfileAbout