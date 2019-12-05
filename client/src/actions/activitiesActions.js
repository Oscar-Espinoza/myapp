const getActivities = (itineraryId) => async (dispatch, getState) => {
  dispatch({ type: 'GET_ACTIVITIES', payload: { isLoading: true } })
    const response = await fetch(`http://localhost:5000/${itineraryId}/activities`).then(resp => resp.json());
    dispatch({ type: 'GET_ACTIVITIES', payload: { itinerary: response, isLoading: false } })
  }

export default getActivities