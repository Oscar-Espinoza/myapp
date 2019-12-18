const initState = {
  
}
  
  const activityReducer = (state = initState, action) => {
    console.log(action)
    switch(action.type){
      case 'ADD_TO_FAV':
        return {
        }
      default: return state  
    }
  }
  
  export default activityReducer