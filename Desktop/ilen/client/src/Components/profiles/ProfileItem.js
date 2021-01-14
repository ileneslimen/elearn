import React from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

const ProfileItem = ({profile}) => {
  let name=profile && profile.user && profile.user.name
  let avatar= profile && profile.user && profile.user.avatar
  let _id= profile && profile.user && profile.user._id
  return (
    <div className='profile bg-light'>
         <img src={avatar} alt='' className='round-img' />
      <h1>{name}</h1>
      <div>
       
        <p>
          {profile.status} 
        </p>
        <p className='my-1'>{profile.location && <span>{profile.location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {profile.skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};
const mapStateToProps=state=>({
    Profile:state.profile
    });
export default connect (mapStateToProps)(ProfileItem)