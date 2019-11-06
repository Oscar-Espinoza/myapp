const initState = {
  cities: []
}

const rootReducer = (state = initState, action) => {
  switch(action.type){
    case 'GET_CITIES':
      return {
        ...state,
        cities: action.payload
      }
    case 'PRUEBA': {
      console.log(action.payload)
    }
    default: return state  
  }
}

export default rootReducer