const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    // profilePic: {
    //     type: String,
    //     required:false
    // },
    roles: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    twofactorAuth:{
        type: String,
        required:false
    }
    ,
    createdAt: {
        type: Date,
        default:Date.now
    }

})

module.exports = mongoose.model('User', UserSchema)