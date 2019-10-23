let mongoose = require('mongoose');
let validator = require('validator');

let faqSchema = new mongoose.Schema({
    name: String,
    country: String
})

module.exports = mongoose.model('cities', faqSchema)