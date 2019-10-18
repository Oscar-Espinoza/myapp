
import React from 'react';
import HeaderLogo from '../MYtineraryLogo.png';

function Header() {
    return <div className="col-12" >
    <header className="App-header">
      <img src={HeaderLogo} className="App-logo" alt="logo"></img>
    </header>
    </div>;
}

export default Header;