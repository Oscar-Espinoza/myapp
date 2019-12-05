const mongoose = require('mongoose')
const validator = require('validator')

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
    type: mongoose.Schema.Types.ObjectId
  },
  activities: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'activities'
  }]
})

module.exports = Itinerary = mongoose.model("itinerary", ItinerarySchema)