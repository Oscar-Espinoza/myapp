import React, {useEffect} from 'react'
import { useParams, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {logIn} from '../actions/sessionActions'

const LoadUser = (props) => {
    const { token } = useParams()
    useEffect(() => {
        props.logIn(token);   
        // eslint-disable-next-line react-hooks/exhaustive-deps        
      }, [])
    return(
        props.loggedIn ? <Redirect to='/'/> : <h1>NO LOgueado</h1>

    )
}

const mapeaEstadoscomoProps = state => {
    return {
        loggedIn: state.sessionReducer.loggedIn
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (token) => dispatch(logIn(token))
    };
  };

export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(LoadUser);
