export const userFavItineraries = (user) => async (dispatch, getState) => {
    const response = await fetch(`http://localhost:5000/user/${user}`)
        .then(resp=>resp.json());
    dispatch({ type: 'GET_USER_FAV', payload: {favItineraries: response, isLoading: false}})
}

export const addItineraryToFavorites = (userId, itineraryId) => async (dispatch, getState) => {
    const response = await fetch(`http://localhost:5000/addItineraryToFav/${itineraryId}/${userId}`)
        .then(resp=>resp.json());
    dispatch({ type: 'ADD_TO_FAV', payload: {favItineraries: response, isLoading: false}})
}
