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
  useEffect(() => {
    props.allCities();
    // eslint-disable-next-line react-hooks/exhaustive-deps        
  }, [])

  return(
    <div>
      {props.isLoading ? 
        <Loading> </Loading> 
        : 
        <ul>
        {props.cities.map(city => (
          <li key = {city.id}>{city.name}</li>
        ))}
        </ul>
      } 
      
    </div>
  )
}

export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(Cities);