import React, { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

const CreateAccount = () => {
  const initState = {
    profilePic: null,
    username: '',
    password1: '',
    password2: '',
    email: '',
    firstname: '',
    lastname: '',
    city: 'Choose',
    agreeLicense: 'false'
  }
  const handleSubmit = async event =>{
    event.preventDefault()
    await axios.post('http://localhost:5000/user', values)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        setValues(initState)       
      }).catch(err => console.log(err));
    console.log(localStorage.getItem('token'))
    const decoded = jwt_decode(localStorage.getItem('token'));
    console.log(decoded);   
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
            <label className="col-3 col-form-label">Username</label>
            <div className="col">
              <input className="form-control" value={values.username} type="username" name="username" required 
                onChange={setCurrentValueToState}/>
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
          <div className="form-group row">
            <label className="col-3 col-form-label">Re-enter Password</label>
            <div className="col">
              <input className="form-control" value={values.password2} type="password" name="password2"
              onChange={setCurrentValueToState}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">Email Address</label>
            <div className="col">
              <input className="form-control" value={values.email} type="email" name="email" required
                onChange={setCurrentValueToState} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">Firstname</label>
            <div className="col">
              <input className="form-control" value={values.firstname} type="firstname" name="firstname" required
                onChange={setCurrentValueToState} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">Lastname</label>

            <div className="col">
              <input className="form-control" value={values.lastname} type="lastname" name="lastname" required
                onChange={setCurrentValueToState} />
            </div>
          </div>
          <div class="form-row align-items-center">
            <div class="col-auto my-1">
              <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
              <select name="city" class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={setCurrentValueToState}>
                <option selected value="Choose">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-10">
              <div class="form-check">
                <input name="agreeLicense" class="form-check-input" type="checkbox" id="gridCheck1"
                   onChange={setCurrentValueToState} />
                <label class="form-check-label" for="gridCheck1">
                  I agree to MYtinerary
                </label>
              </div>
            </div>
          </div>
          <div class="input-group">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01" />
              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
          </div>
          
          <button type="submit">Create account</button>
        </form>
        
      )

    
      
    }

export default CreateAccount