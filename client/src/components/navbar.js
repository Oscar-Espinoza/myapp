import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../actions/sessionActions' 

const Navbar = (props) => {
    const isLoggedIn = props.loggedIn
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    {isLoggedIn ? 
                        <Link className="nav-link" to="/mytinerary">Fav Itineraries<span className="sr-only">(current)</span></Link>
                        : <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                    }
                </li>
                <li className="nav-item">
                   {isLoggedIn ? <Link className="nav-link" to="#" onClick={props.logOut}>LogOut</Link>
                   :    <Link className="nav-link" to="/">Create Account</Link>} 
                </li>

                </ul>
            </div>
            </nav>
            )
}

const mapeaEstadoscomoProps = state => {
    return {
        loggedIn: state.sessionReducer.loggedIn
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    };
  };

  export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(Navbar);