import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'
import activitiesReducer from './activitiesReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    citiesReducer,
    itinerariesReducer,
    activitiesReducer 
})
