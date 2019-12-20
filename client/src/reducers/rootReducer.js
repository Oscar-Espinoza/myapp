import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'
import activitiesReducer from './activitiesReducer'
import sessionReducer from './sessionReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    citiesReducer,
    itinerariesReducer,
    activitiesReducer,
    sessionReducer,
    userReducer
})
