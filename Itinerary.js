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
<<<<<<< HEAD
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City'
    
=======
  _cityId: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true    
>>>>>>> 3dbbcfb0843d9afe97a96cfee8d8da5b5cb50d7b
  }
})

module.exports = Itinerary = mongoose.model("Itinerary", ItinerarySchema)