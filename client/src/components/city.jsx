import React, { useEffect } from 'react'
import Loading from './Loading'
import { connect } from 'react-redux'
import getItinerary from '../actions/itinerariesActions'
import { useParams } from 'react-router-dom'


const Itinerary = props => { 
  const { cityId } = useParams()
  console.log(cityId)
  useEffect(() => {
    props.getItinerary(cityId);   
    // eslint-disable-next-line react-hooks/exhaustive-deps        
  }, [])
  return (
    props.isLoading ? <Loading></Loading>
    :
    <div>
      <img src={`${props.itinerary.profilePic}`} alt=""/>
    </div>
  );
}

const mapeaEstadoscomoProps = state => {
  return {
      itinerary: state.itinerariesReducer.itinerary,
      isLoading: state.itinerariesReducer.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getItinerary: (id) => dispatch(getItinerary(id))
  };
};


export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(Itinerary)