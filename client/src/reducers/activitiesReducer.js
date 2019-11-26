const initState = {
    itinerary: {},
    isLoading: true,
    activities: []
  }
  
  const itineraryReducer = (state = initState, action) => {
    switch(action.type){
      case 'GET_ACTIVITIES':
        return {
          ...state,
          ...action.payload 
        }
      default: return state  
    }
  }
  
  export default itineraryReducer