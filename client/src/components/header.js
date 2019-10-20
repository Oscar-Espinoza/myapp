
import React from 'react'

const Header = ({ srcLogo }) =>{
    return( 
        <div className="col-12 App-header" >
            <img className="App-logo" alt="logo" src={srcLogo} ></img>
        </div>
        ) 
}

export default Header;