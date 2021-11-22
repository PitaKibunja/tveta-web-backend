const mongoose = require('mongoose')
const JobsSchema = new mongoose.Schema({
    jref: {
        type: String,
        required:true
    },
    jname: {
        type: String,
        required:true
    },
    jclose: {
        type: Date,
        required:true
    },
    jlinl: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default:Date.now
    }

})
module.exports=mongoose.model('Jobs',JobsSchema)