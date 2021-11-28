const mongoose =require('mongoose')
const PostCategoriesSchema=new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    subcategory:{
        type:String,
        required:false
    },
     createdAt: {
        type: Date,
        default:Date.now
    }
})
module.exports=mongoose.model('PCategory',PostCategoriesSchema)