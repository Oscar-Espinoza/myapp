
import React from 'react'

const Header = ({ srcLogo }) =>{
    return( 
        <div className="col-12 App-header" >
            <img src={srcLogo} className="App-logo" alt="logo"></img>
        </div>
        ) 
}

export default Header;