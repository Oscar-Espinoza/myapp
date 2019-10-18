import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ArrowLogo from './arrowLogo.png'
import homeIcon from './homeIcon.png'
import Header from './components/header'
//<img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="container ">
      <div className="row ">
        {Header()}
        <div className="col-12 mt-5">
          <p className="text-center">Find your perfect trick, designed by insiders who know and love their cities </p>
        </div>
        <div className="col-12 text-center mt-3" >
          <h4 className="text-center">Start browsing</h4>
          <a><img src={ArrowLogo} className="App-logo" alt="arrowLogo"></img></a>
          <p className="pt-4">Want to build your own MYtinerary</p>
        </div>
        <div className="col-12">
          <div class="row">
            <div class="col-6 text-center"><a href="#">Login</a></div>
            <div class="col-6"><a href="#">Create account</a></div>
          </div>
        </div>
        <div className="fixed-bottom text-center">
        <img src={homeIcon} className="homeIcon" alt="logo"></img>
        </div>
      </div>
    </div>
  );
}

export default App;

