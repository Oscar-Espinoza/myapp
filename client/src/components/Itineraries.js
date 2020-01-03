import React, { useEffect } from 'react'
import Loading from './Loading'
import { connect } from 'react-redux'
import getItineraries from '../actions/itinerariesActions'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { userFavItineraries, addItineraryToFavorites, removeItineraryFromFavorites } from '../actions/userActions'
const jwt_decode = require('jwt-decode')


const Itinerary = props => {
  let userId = ''

  const isInFav = (itineraryId) => {
      return props.favItineraries.includes(itineraryId)
  }

  if (props.loggedIn) {
    userId = jwt_decode(localStorage.getItem('token')).id
  }  
  const UpdateFromFav = (event) => { 
    const itineraryId = event.target.id
    let buttonClassName = event.target.className
    if (props.loggedIn) {
      if (isInFav(itineraryId)) {
        props.removeItineraryFromFavorites(userId, itineraryId)
      } else {
        props.addItineraryToFavorites(userId, itineraryId)
      }       
    } 
  } 
  const { cityId } = useParams()
  useEffect( () => {
    if (props.loggedIn) {
      const fun = async() =>{
        await props.userFavItineraries(userId)
        props.getItineraries(cityId)
      }
      fun()
    } else {
      props.getItineraries(cityId)
    }
    
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
          <button onClick={UpdateFromFav} id={itinerary._id} className={isInFav(itinerary._id) ? 'btn btn-success' : 'btn btn-secondary' }>add to fav</button>  
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
      userFavItineraries: (user) => dispatch(userFavItineraries(user)),
      addItineraryToFavorites: (userId, itineraryId) => dispatch(addItineraryToFavorites(userId, itineraryId)),
      removeItineraryFromFavorites: (userId, itineraryId) => dispatch(removeItineraryFromFavorites(userId, itineraryId))
  };
};


export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(Itinerary)