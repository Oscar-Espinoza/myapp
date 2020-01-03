const initState = {
  cities: [],
  isLoading: true
}

const citiesReducer = (state = initState, action) => {
  switch(action.type){
    case 'GET_CITIES':
      return {
        ...state,
        ...action.payload 
      }
    default: return state  
  }
}

export default citiesReducer