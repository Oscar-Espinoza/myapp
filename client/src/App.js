import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/home.js'
import Cities from './components/cities'
import Itinerary from './components/itinerary'
import City from './components/city.jsx'


//<img src={logo} className="App-logo" alt="logo" />
function App() {

  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/cities' component={Cities} />
      <Route exact path='/itinerary' component={Itinerary} />

      <Switch>
        <Route exact path = '/cities/:cityId' children ={<City />}></Route>
      </Switch>

    </BrowserRouter>
  );

  
}

export default App;

