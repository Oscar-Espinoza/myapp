import { useParams } from 'react-router-dom'
const getItinerary = (cityId)=> async (dispatch, getState) =>{
    const response = await fetch(`http://localhost:5000/cities/${cityId}`).then(resp=>resp.json());
    dispatch({ type: 'GET_ITINERARY', payload: {itinerary: response, isLoading: false}})
}

export default getItinerary;