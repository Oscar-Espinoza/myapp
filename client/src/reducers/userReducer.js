const initState = {
    favItineraries: []
}
  
  const userReducer = (state = initState, action) => {
    switch(action.type){
      case 'GET_USER_FAV':
        return {
          ...state,
          ...action.payload 
        }
      default: return state  
    }
  }
  
  export default userReducer