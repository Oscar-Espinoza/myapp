import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'
import activitiesReducer from './activitiesReducer'
import sessionReducer from './sessionReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    citiesReducer,
    itinerariesReducer,
    activitiesReducer,
    sessionReducer 
})
