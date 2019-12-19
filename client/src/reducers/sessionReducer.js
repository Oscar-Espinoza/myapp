const initState = {
  loggedIn: Boolean.valueOf(localStorage.getItem('token'))
}
  
  const sessionReducer = (state = initState, action) => {
    switch(action.type){
      case 'UPDATE_SESSION_STATUS':
        return {
          ...state,
          ...action.payload
        }
      default: return state  
    }
  }
  
  export default sessionReducer