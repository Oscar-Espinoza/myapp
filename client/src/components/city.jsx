import React, { useEffect } from 'react'
import Loading from './Loading'
import { connect } from 'react-redux'
import getItineraries from '../actions/itinerariesActions'
import { useParams } from 'react-router-dom'


const Itinerary = props => { 
  const { cityId } = useParams()
  useEffect(() => {
    props.getItineraries(cityId);   
    // eslint-disable-next-line react-hooks/exhaustive-deps        
  }, [])
  return (
    props.isLoading ? <Loading></Loading>
    :
    <div className = "row">
      {props.itineraries.map((itinerary, index) => (
          <div className="col-10">
          <h2>Itinerary #{index + 1}</h2>
          <img src={`${itinerary.profilePic}`} alt="" style={{width: '100px'}} />
          </div>        
      ))}      
    </div>
  )
}

const mapeaEstadoscomoProps = state => {
  return {
      itineraries: state.itinerariesReducer.itineraries,
      isLoading: state.itinerariesReducer.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getItineraries: (id) => dispatch(getItineraries(id))
  };
};


export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(Itinerary)