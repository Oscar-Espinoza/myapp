const allCities = ()=> async (dispatch, getState) =>{
    const response = await fetch("http://localhost:5000/cities/all").then(resp=>resp.json());
    dispatch({ type: 'GET_CITIES', payload: {cities: response, isLoading: false}})
}

export default allCities;