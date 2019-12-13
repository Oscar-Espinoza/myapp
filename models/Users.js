let mongoose = require('mongoose')
let validator = require('validator')

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
    googleId : {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('users', UsersSchema)