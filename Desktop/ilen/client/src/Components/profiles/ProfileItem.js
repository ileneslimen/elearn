import React from 'react'
import {Link}  from 'react-router-dom'
 import PropTypes from 'prop-types'


export const ProfileItem = ({
    profile:{
        user:{_id,name,avatar},
        status,
        location}}) => {
  
    //   const myuser = Object.values({name,_id,avatar});
    // console.log(myuser[0])
    return (
        <div className='profile bg-light'>
            <img src={avatar} alt='avatar' className='round-img'  />  
          <div>
              <h2>{name}</h2>
              <p className='style'>{status}</p>
              <p className='my-1'>{location && <span>{location}</span>}</p> 
                <Link to={`/profile/${_id}`} className= 'btn btn-primary'>View Profile</Link>   
           </div>

        </div>
    )
}
ProfileItem.propTypes={
    profile:PropTypes.object.isRequired
};
