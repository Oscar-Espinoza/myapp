import React, { useEffect } from 'react'
import Loading from './Loading'
import { connect } from 'react-redux'
import getItineraries from '../actions/itinerariesActions'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { userFavItineraries, addItineraryToFavorites } from '../actions/userActions'
const jwt_decode = require('jwt-decode')


const Itinerary = props => {
  let userId = ''
  console.log(props.favItineraries)

  const isInFav = (itineraryId) => {
    if (props.loggedIn && props.favItineraries != null) {
      return props.favItineraries.includes(itineraryId) ? "btn btn-success" : "btn btn-primary"
    } else {
      return "btn btn-primary"
    }
  }
  if (props.loggedIn) {
    userId = jwt_decode(localStorage.getItem('token')).id
  }  
  const addToFav = (event) => { 
    const itineraryId = event.target.id
    let buttonClassName = event.target.className
    if (props.loggedIn) {
       props.addItineraryToFavorites(userId, itineraryId)
    } 
    // const button = event.target
    // if (button.className === "btn btn-primary") {
    //   button.className = "btn btn-success"
    // } else {
    //   button.className = "btn btn-primary"
    // }
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
          <button onClick={addToFav} id={itinerary._id} className={isInFav(itinerary._id)}>add to fav</button>  
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
      addItineraryToFavorites: (userId, itineraryId) => dispatch(addItineraryToFavorites(userId, itineraryId))
  };
};


export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(Itinerary)