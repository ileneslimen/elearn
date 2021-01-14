// import {React,useEffect} from 'react'
// import {getProfiles} from '../../actions/profile'
// import { useDispatch,useSelector} from 'react-redux'
// import { Fragment } from 'react';
// import {ProfileItem} from './ProfileItem'
// import Spinner from '../layout/spinner'

// export const Profiles = () => {
// const dispatch  = useDispatch()
// const profiles = useSelector(state => state.profile.profiles)
// const loading = useSelector(state => state.profile.loading)
//     useEffect(() => {
//       dispatch( getProfiles())       
             
//     }, []) 

//     return<div className='container'> 
//       <Fragment>
// {
//     loading? <Spinner />:<Fragment>
// <h1 className='large text-primary'>Professors && Students</h1>
    
//         <div className="profiles">
//           { profiles.length>0? (
//               profiles.map((profile)=>(<ProfileItem key={profile._id} profile={profile}/>))
//           ):<h4> no profiles found </h4>}
//         </div>
// </Fragment>}</Fragment>
       
// </div>  
// };
 

