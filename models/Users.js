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
    }
})

module.exports = mongoose.model('users', UsersSchema)