const initState = {
    itineraries: [],
    isLoading: true
  }
  
  const itineraryReducer = (state = initState, action) => {
    switch(action.type){
      case 'GET_ITINERARIES':
        return {
          ...state,
          ...action.payload 
        }
      default: return state  
    }
  }
  
  export default itineraryReducer