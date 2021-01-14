import {React,useEffect} from 'react'
import {getProfiles} from '../../actions/profile'
import { connect,useSelector} from 'react-redux'
import { Fragment } from 'react';
import ProfileItem from './ProfileItem'
import Spinner from '../layout/spinner'
import PropTypes from 'prop-types';

export const Profiles = () => {

const profiles = useSelector(state => state.profile.profiles)
const loading = useSelector(state => state.profile.loading)
    useEffect(() => {
       getProfiles()      
             
    }, []) 

    return<div className='container'> 
      <Fragment>
{
    loading? <Spinner />:<Fragment>
<h1 className='large text-primary'>Professors && Students</h1>
    
        <div className="profiles">
          { profiles.length>0? (
              profiles.map((profile)=>(<ProfileItem key={profile._id} profile={profile}/>))
          ):<h4> no profiles found </h4>}
        </div>
</Fragment>}</Fragment>
       
</div>  
};
 

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
 
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
