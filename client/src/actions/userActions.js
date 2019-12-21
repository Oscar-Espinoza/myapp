import axios from 'axios'

export const userFavItineraries = (user) => async (dispatch, getState) => {
    const response = await fetch(`http://localhost:5000/user/${user}`)
        .then(resp=>resp.json());
    dispatch({ type: 'GET_USER_FAV', payload: {favItineraries: response}})
}

export const addItineraryToFavorites = (userId, itineraryId) => async (dispatch, getState) => {
    console.log(`itineraryId: ${itineraryId}`)
    console.log(`userId: ${userId}`)
    const response = await axios.post(`http://localhost:5000/addItineraryToUserFav/${itineraryId}/${userId}`)
        .then(resp=>resp)
        .catch(err => {
            console.log(err)
        });
    console.log(response)
    dispatch({ type: 'GET_USER_FAV', payload: {favItineraries: response}})
}
