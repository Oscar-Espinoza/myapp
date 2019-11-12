const initState = {
  cities: [],
  isLoading: true,
  searchTerm: ''
}

const rootReducer = (state = initState, action) => {
  switch(action.type){
    case 'GET_CITIES':
      return {
        ...state,
        ...action.payload 
      }
    default: return state  
  }
}

export default rootReducer