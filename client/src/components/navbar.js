import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    console.log(props)
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {props.loggedIn ? <Link className="navbar-brand" to="/cities">LOGEADO</Link>
                : <Link className="navbar-brand" to="/">NO LOGEADO</Link>
            }
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Link</Link>
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

  export default connect(mapeaEstadoscomoProps)(Navbar);