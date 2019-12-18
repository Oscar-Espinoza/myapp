let mongoose = require('mongoose')

let UsersSchema = new mongoose.Schema({
    profilePic: {
        data: Buffer, 
        contentType: String
    },
    username: {
        type: String, 
    },
    password1: {
        type: String, 
    },
    password2: {
        type: String, 
    },
    email: {
        type: String,
        unique: true
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    city: {
        type: String
    },
    agreeLicense: {
        type: Boolean
    },
    googleId: {
        type: String,
        unique: true
    },
    favItineraries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'itinerary'
    }]
})

module.exports = mongoose.model('users', UsersSchema)