const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim:true
    },
    body: {
        type: String,
        required:true
    },
    image: {
        type: String,
        required:false
    }
    ,
    status: {
        type: String,
        default:'public',
        enum:['public','private'] 
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})
module.exports=mongoose.model('Post', PostSchema)