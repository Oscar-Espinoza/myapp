import axios from 'axios'

export const userFavItineraries = (user) => async (dispatch, getState) => {
    const response = await fetch(`http://localhost:5000/user/${user}`)
        .then(resp=>resp.json());
    dispatch({ type: 'GET_USER_FAV', payload: {favItineraries: response}})
}

export const addItineraryToFavorites = (userId, itineraryId) => async (dispatch, getState) => {
    const response = await axios.post(`http://localhost:5000/addItineraryToUserFav/${itineraryId}/${userId}`)
        .then(resp=>resp)
        .catch(err => {
            console.log(err)
        });
    console.log(response)
    dispatch({ type: 'GET_USER_FAV', payload: {favItineraries: response.data}})
}

export const removeItineraryFromFavorites = (userId, itineraryId) => async (dispatch, getState) => {
    const response = await axios.post(`http://localhost:5000/removeItineraryFromFav/${itineraryId}/${userId}`)
        .then(resp=>{
            return resp})
        .catch(err => {
            console.log(err)
        });
    dispatch({ type: 'GET_USER_FAV', payload: {favItineraries: response.data}})
}
