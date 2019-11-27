const mongoose = require('mongoose')

const ActivitySchema = new mongoose.Schema({
  title: {
    type: String
  },
  info: {
    type: String
  },
  _cityId: {
    type: mongoose.Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('activities', ActivitySchema)