import React, {Fragment, useEffect} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router , Route , Switch}from 'react-router-dom'
import './App.css';
import store from './store'
import Navbar from './Components/layout/NavBar'
import Landing from './Components/layout/Landing'
import Login from './Components/auth/Login'
import Register from './Components/auth/Register'
import Alert from './Components/layout/Alert'
import "./App.css";
import {loadUser} from './actions/auth'
import setAuthToken from './utiles/setAuthToken'
import Dashboard from './Components/dashboard/Dashboard'
import PrivateRoute from './Components/Routing/PrivateRoute'

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
       </Switch> 
     </section>
    </Fragment>
    </Router>
    </Provider>
  );}


export default App;
