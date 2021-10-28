const mongoose = require('mongoose')
const InstitutionSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    regno:{
        type:String,
        required:true
    },
    county:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    regdate: {
        type: String,
        required:true
    },
    expdate: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    phone_no: {
        type: String,
        required:true
    },
    website:{
        type:String,
        required:false
    },
    email: {
        type: String,
        required:true
    },
    po_box: {
        type:String,
        required:true
    },
    details: {
        type: String,
        required:true,
        default:'Details'
    },
    courses: [
        {
            course:{
                type:String,
                required:true
            }, 
            body:{
                type:String,
                required:true
            },
            level: {
                type: String,
                required:true
            },
            enrollment:{
                type: Number,
                required:true
            }
        }
    ],
    date: {
        type: Date,
        required: true,
        default:Date.now()
    }
})
module.exports=mongoose.model('Institution',InstitutionSchema)