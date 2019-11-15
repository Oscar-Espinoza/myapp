let mongoose = require('mongoose')
let validator = require('validator')

let CitySchema = new mongoose.Schema({
    name: String,
    country: String
})

module.exports = mongoose.model('City', CitySchema)

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 