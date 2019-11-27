const getActivities = (itineraryId) => async (dispatch, getState) => {
  console.log(itineraryId);
    const response = await fetch(`http://localhost:5000/Activities/${itineraryId}`).then(resp => resp.json());
    console.log(response)
    dispatch({ type: 'GET_ACTIVITIES', payload: { activities: response, isLoading: false } })
  }

export default getActivities