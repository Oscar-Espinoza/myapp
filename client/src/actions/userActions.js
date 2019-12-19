const userItineraries = () => async (dispatch, getState) => {
    const response = await fetch("http://localhost:5000/user")
        .then(resp=>resp.json());
    dispatch({ type: 'GET_USER', payload: {favItineraries: response, isLoading: false}})
}

export default userItineraries;