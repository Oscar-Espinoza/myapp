const initState = {
    itinerary: {},
    isLoading: true
  }
  
  const activityReducer = (state = initState, action) => {
    console.log(action)
    switch(action.type){
      case 'GET_ACTIVITIES':
        return {
          ...state,
          ...action.payload 
        }
      default: return state  
    }
  }
  
  export default activityReducer