import React, { useEffect } from 'react'
import Loading from './Loading'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import getItinerary from '../actions/itinerariesActions'

const mapeaEstadoscomoProps = state => {
  return {
      itinerary: state.itinerariesReducer.itinerary,
      isLoading: state.itinerariesReducer.isLoading
  }
}

const mapDispatchToProps = (dispatch, cityId) => {
  return {
      getItinerary: () => dispatch(getItinerary(cityId))
  };
};

const Itinerary = props => {
  const { cityId } = useParams()
  
  useEffect(() => {
    props.getItinerary(cityId);   
    // eslint-disable-next-line react-hooks/exhaustive-deps        
  }, [])

  
  return (
    props.isLoading ? <Loading></Loading>
    :
    <div>
      <h3>{props.itinerary.title}</h3>
    </div>
  );
}

export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(Itinerary)