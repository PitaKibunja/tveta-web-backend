const mongoose = require('mongoose')
const TrainersSchema = mongoose.Schema({
    regno: {
        type: String,
        required:true
    },
    expdate: {
        type: String,
        required:true
    },
    fullname: {
        type: String,
        required:true
    },
    specialization: {
        type: String,
        required:true
    },
    cluster: {
        type: String,
        required:true
    },
    status: {
        type: String,
        required:true
    }
})
module.exports=mongoose.model('Trainers',TrainersSchema)