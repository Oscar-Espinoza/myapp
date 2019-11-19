const initState = {
    itinerary: {},
    isLoading: true,
  }
  
  const itineraryReducer = (state = initState, action) => {
    switch(action.type){
      case 'GET_ITINERARY':
        return {
          ...state,
          ...action.payload 
        }
      default: return state  
    }
  }
  
  export default itineraryReducer