const initState = {
  loggedIn: localStorage.getItem('token') ? true : false
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