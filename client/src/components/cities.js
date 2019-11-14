import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import allCities from '../actions/citiesActions'
import Loading from './Loading'
import { Link } from 'react-router-dom'

const mapeaEstadoscomoProps = state => {
  return {
      cities: state.cities,
      isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      allCities: () => dispatch(allCities())
  };
};


const Cities = props => {

  const [searchTerm, setSearchTerm] = useState("")
  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  const results = !searchTerm
  ? props.cities
  : props.cities.filter(city =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    
  useEffect(() => {
    props.allCities();   
    // eslint-disable-next-line react-hooks/exhaustive-deps        
  }, [])

  return(
      props.isLoading 
        ? <Loading> </Loading> 
        : 
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          <ul>
          {results.map(city => (
            <li key = {city.id}> <Link to={"/cities/" + city._id}>{city.name}</Link></li>
          ))}
          </ul>
        </div>
  )
}

export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(Cities);

  