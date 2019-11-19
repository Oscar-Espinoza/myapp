let mongoose = require('mongoose')
let validator = require('validator')

const ItinerarySchema = new mongoose.Schema({
  title: {
    type: String
  },
  profilePic: {
    type: String,
  },
  rating: {
    type: Number
  },
  duration: {
    type: Number
  },
  price: {
    type: Number
  },
  hashtag: {
    type: Array
  },
  _cityId: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true    
  }
})

module.exports = Itinerary = mongoose.model("Itinerary", ItinerarySchema)