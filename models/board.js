const mongoose = require('mongoose')
const BoardSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    img: {
        type: String,
        required:true
    },
    position: {
        type: String,
        required:true
    },
    details: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        required: true,
        default:Date.now()
    }
})
module.exports=mongoose.model('Board',BoardSchema)