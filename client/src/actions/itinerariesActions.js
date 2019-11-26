const getItineraries = (cityId) => async (dispatch, getState) => {
  const response = await fetch(`http://localhost:5000/cities/${cityId}`).then(resp => resp.json());
  dispatch({ type: 'GET_ITINERARIES', payload: { itineraries: response, isLoading: false } })
}

export default getItineraries;