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
    category: {
        type: String,
        required:false
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})
module.exports=mongoose.model('Post', PostSchema)