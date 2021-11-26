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
        type: String,
        required:true
    },
    jlink: {
        type: String,
        required: false,
        default:'Test Job'
    },
    jdescription: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default:Date.now
    }

})
module.exports=mongoose.model('Jobs',JobsSchema)