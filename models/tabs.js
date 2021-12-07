const mongoose = require('mongoose')
const TabsSchema = mongoose.Schema({
    tabName: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})