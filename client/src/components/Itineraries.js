import React, { useEffect } from 'react'
import Loading from './Loading'
import { connect } from 'react-redux'
import getItineraries from '../actions/itinerariesActions'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { userFavItineraries } from '../actions/userActions'
const jwt_decode = require('jwt-decode')


const Itinerary = props => {
  let userId = ''
  if (props.loggedIn) {
    userId = jwt_decode(localStorage.getItem('token')).id
  }
  
  function addToFav(event){
    console.log(event.target.parentNode)
    // const button = event.target
    // if (button.className === "btn btn-primary") {
    //   button.className = "btn btn-success"
    // } else {
    //   button.className = "btn btn-primary"
    // }
  } 
  const { cityId } = useParams()
  useEffect(() => {
    props.getItineraries(cityId);
    if (props.loggedIn) {
      props.userFavItineraries(userId)
    }   
    // eslint-disable-next-line react-hooks/exhaustive-deps        
  }, [])
  return (
    props.isLoading ? <Loading></Loading>
    :
    <div className = "row">
      {props.itineraries.map((itinerary, index) => (
          <div className="col-10" itineraryid={itinerary._id}>
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
      isLoading: state.itinerariesReducer.isLoading,
      loggedIn: state.sessionReducer.loggedIn,
      favItineraries: state.userReducer.favItineraries
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getItineraries: (id) => dispatch(getItineraries(id)),
      userFavItineraries: (user) => dispatch(userFavItineraries(user))
  };
};


export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(Itinerary)