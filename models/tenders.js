const mongoose = require('mongoose')
const TendersSchema = mongoose.Schema({
    refno: {
        type: String,
        required:true
    },
    tname: {
        type: String,
        required:true
    },
    openingdate: {
        type: Date,
        default:Date.now
    },
    tlink: {
        type: String,
        required: false,
        default:'Not provided yet!'
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})
module.exports=mongoose.model('Tenders',TendersSchema)