import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    citiesReducer,
    itinerariesReducer 
})
