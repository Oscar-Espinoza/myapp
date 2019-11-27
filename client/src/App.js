import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './components/home.js'
import Cities from './components/cities'
import Itineraries from './components/Itineraries.js'
import Activities from './components/Activities'

function App() {

  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/cities' component={Cities} />
      <Route exact path = '/cities/:cityId/Itineraries' component ={Itineraries}></Route>
      <Route exact path = '/Itineraries/:itineraryId' component ={Activities}></Route>
    </BrowserRouter>
  );  
}

export default App;

