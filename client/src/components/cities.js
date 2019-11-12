import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import allCities from '../actions/citiesActions'
import Loading from './Loading'

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

  const handleChange = event => {
    props.searchTerm = event.target.value
  }

  const results = props.searchTerm
  ? props.cities
  : props.cities.filter(city =>
      city.toLowerCase().includes(props.searchTerm.toLowerCase())
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
            value={props.searchTerm}
            onChange={handleChange}
          />
          <ul>
          {props.cities.map(city => (
            <li key = {city.id}>{city.name}</li>
          ))}
          </ul>
        </div>
  )
}

export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(Cities);