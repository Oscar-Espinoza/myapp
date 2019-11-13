import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Route  } from 'react-router-dom'
import Home from './components/home.js'
import Cities from './components/cities.js'
import Itinerary from './components/itinerary'


//<img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/cities' component={Cities} />
      <Route path='/itinerary' component={Itinerary} />      
    </BrowserRouter>
  );
}

export default App;

