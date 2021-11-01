const mongoose=require('mongoose')
const CoursesSchema=new mongoose.Schema({
    course:{
        type: String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    level: {
        type:Number,
        required:true
    },
    date: {
        type: Date,
        required: true,
        default:Date.now()
    }
})
module.exports=mongoose.model('Course',CoursesSchema)