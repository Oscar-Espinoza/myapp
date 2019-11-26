const getActivities = (ItineraryId) => async (dispatch, getState) => {
    const response = await fetch(`http://localhost:5000/Itineraries/${ItineraryId}`).then(resp => resp.json());
    dispatch({ type: 'GET_ACTIVITIES', payload: { itinerary: response, isLoading: false } })
  }

  export default getActivities