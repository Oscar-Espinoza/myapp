import React, { useState } from 'react'
import axios from 'axios'

const CreateAccount = () => {
  const initState = {
    email: '',
    password: '',
    loginErrors: ''
  }
  const handleSubmit = async event =>{
    event.preventDefault()
    await axios.post('http://localhost:5000/userLogin', values).then(res => console.log(res))
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
        
      )

    
      
    }

export default CreateAccount