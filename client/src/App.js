import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './components/home.js'
import Cities from './components/cities'
import Itineraries from './components/Itineraries.js'
import Activities from './components/Activities'
import CreateAccount from './components/createAcount'
import Login from './components/Login'
import LoadUser from './components/loadUser'
import Navbar from './components/navbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
      <Route exact path='/' component={Home} />
      <Route exact path='/mytinerary' component={CreateAccount} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/cities' component={Cities} />
      <Route exact path = '/cities/:cityId/Itineraries' component ={Itineraries}></Route>
      <Route exact path = '/Itineraries/:itineraryId' component ={Activities}></Route>
      <Route exact path = '/loadUser/:token' component ={LoadUser}></Route>
    </BrowserRouter>
    </>
  );  
}

export default App;

