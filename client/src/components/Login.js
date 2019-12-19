import React, { useState } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import { logOut, logIn } from '../actions/sessionActions'

const CreateAccount = (props) => {
  console.log(props)
  const initState = {
    email: '',
    password1: '',
    loginErrors: ''
  }
  const handleSubmit = async event =>{
    event.preventDefault()
    await axios.post('http://localhost:5000/userLogin', {...values, token: localStorage.getItem('token')})
      .then(res => {
        console.log(res.data.message)
        props.logIn(res.data.token)
      })
    setValues(initState)
  }
  const [values, setValues] = useState(initState)

  const setCurrentValueToState = event => {
    const target = event.target
    
    setValues({
      ...values, 
      [event.target.name]: target.value
    })
  } 
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label className="col-3 col-form-label">Email Address</label>
            <div className="col">
              <input className="form-control" value={values.email} type="email" name="email" required
                onChange={setCurrentValueToState} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">Password</label>
            <div className="col">
              <input className="form-control" value={values.password1} type="password" name="password1"
                onChange={setCurrentValueToState}
              />
            </div>
          </div>          
          <button type="submit">Login</button>
        </form>

      <button onClick={() => {
        window.location.href = "http://localhost:5000/auth/google"
      }}>Sign In with Google</button>
      <button onClick={props.logOut}>Logout</button>
    </>
      )

    
      
    }
    const mapeaEstadoscomoProps = state => {
      return {
          loggedIn: state.sessionReducer.loggedIn
      }
    }

    const mapDispatchToProps = (dispatch) => {
      return {
          logOut: () => dispatch(logOut()),
          logIn: (token) => dispatch(logIn(token))
      };
    };

    export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(CreateAccount);