import React, {Fragment, useEffect} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router , Route , Switch}from 'react-router-dom'

import store from './store'
import Navbar from './Components/layout/NavBar'
import Landing from './Components/layout/Landing'
import Login from './Components/auth/Login'

import Alert from './Components/layout/Alert'

import {loadUser} from './actions/auth'
import setAuthToken from './utiles/setAuthToken'
import Dashboard from './Components/dashboard/Dashboard'
import CreateProfile from './Components/profile-form/CreateProfile'
import EditProfile from './Components/profile-form/EditProfile'
import Profiles from './Components/profiles/Profiles'
import {Profile} from './Components/profile/Profile'
import PrivateRoute from './Components/Routing/PrivateRoute'
import FileUpload from './Components/Uploadfiles/FileUpload'
import FilesList from "./Components/Uploadfiles/FileList";
import Register from './Components/auth/Register'
import Posts from './Components/posts/Posts'
import Post from './Components/post/Post'

if(localStorage.token){
  setAuthToken(localStorage.token)
      }
const App= ()=> {
  useEffect(()=>{
    store.dispatch(loadUser())
  },[])
return (
  <Provider className="App" store={store}>
    
<Router>
    <Fragment >
    <Navbar/>
     <Route exact path='/' component={Landing}/>
     <section className='Container'>
       <Alert/>
       <Switch>
         <Route exact path='/register' component={Register} />
         <Route exact path='/login' component={Login} />
         <PrivateRoute exact path='/dashboard' component={Dashboard} />
         <PrivateRoute exact path='/posts' component={Posts} />
         <Route exact path='/profiles' component={Profiles}/>
         <Route exact path='/profile/:id' component={Profile}/>
         <PrivateRoute exact path='/create-profile' component={CreateProfile} />
         <PrivateRoute exact path='/edit-profile' component={EditProfile} />
         <PrivateRoute exact path='/post/:id' component={Post} />
         <Route component={FileUpload} path="/upload"  />
         <Route component={FilesList} path="/list"  />
         
         
       </Switch> 
     </section>
    </Fragment>
    </Router>
    </Provider>
  );}


export default App;
