const mongoose = require('mongoose')
const NavItems = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    path: {
        type: String,
        required:true
    },
    icon: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        required: true,
        default:Date.now()
    }
})
module.exports=mongoose.model('Nav',NavItems)