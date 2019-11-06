import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import allCities from '../actions/citiesActions'
import Loading from './Loading'

const mapeaEstadoscomoProps = state => {
  console.log(state)
  return {
      cities: state.cities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      allCities: () => dispatch(allCities())
  };
};



const Cities = () => {
  const [cities, setCities] = useState([])
  const [isLoading, setIsloading] = useState(false)
  
  useEffect(async () => { 
    setIsloading(true)
      await allCities();
      setCities(cities)  
  }, [])

  return(
    <div>
      {isLoading ? <Loading> </Loading> : console.log('rendered')}
      <ul>
        {cities.map(city => (
          <li key = {city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(Cities);