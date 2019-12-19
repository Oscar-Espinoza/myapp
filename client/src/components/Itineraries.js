import React, { useEffect } from 'react'
import Loading from './Loading'
import { connect } from 'react-redux'
import getItineraries from '../actions/itinerariesActions'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Itinerary = props => {
  
  const addToFav = (event) => {
    const button = event.target
    console.log(button)
    if (button.className === "btn btn-primary") {
      button.className = "btn btn-success"
    } else {
      button.className = "btn btn-primary"
    }
  } 
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
          <Link to={`/Itineraries/${itinerary._id}`}><img src={`${itinerary.profilePic}`} alt="" style={{width: '100px'}} /></Link>
          <button onClick={addToFav} className="btn btn-primary">add to fav</button>  
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