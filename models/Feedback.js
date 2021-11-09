const mongoose = require('mongoose')
const FeedbackSchema = new mongoose.Schema({
    feedbacktype: {
        type: String,
        default:'General Feedback',
        required:true
    },
    name: {
        type: String,
        default:'Anonymous',
        required:false
    },
    email: {
        type: String,
        default:'Anonymous',
        required:false
    },
    feedbackMsg: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        required: true,
        default:Date.now()
    }
})
module.exports=mongoose.model('Feedback',FeedbackSchema)