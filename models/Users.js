let mongoose = require('mongoose')
let validator = require('validator')

let UsersSchema = new mongoose.Schema({
    profilePic: {
        data: Buffer, 
        contentType: String
    },
    username: {
        type: String, 
        required: true
    },
    password1: {
        type: String, 
        required: true
    },
    password2: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,
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
    }
})

module.exports = mongoose.model('users', UsersSchema)