import axios from 'axios'

const getItineraries = (itineraryId) => async (dispatch, getState) => {
    const response = await axios.post(`http://localhost:5000/addToFav`, itineraryId).then(resp => resp.json());
    dispatch({ type: 'ADD_TO_FAV', payload: { msg: 'Itinerary added to favorite', isLoading: false } })
  }
  
  export default getItineraries;