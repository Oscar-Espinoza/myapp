const allCities = () => async (dispatch, getState) => {
    const response = await fetch("http://localhost:5000/cities/all").then(resp=>resp.json());
    dispatch({ type: 'GET_CITIES', payload: response })
}

export default allCities;


// axios.get('')
//       .then(res => {
//         console.log(res)
//         setCities(res.data)
//         setIsloading(false)
//       }).catch(err => {
//         console.log(err)
//       })