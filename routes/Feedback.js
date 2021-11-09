const express = require('express')
const router = express.Router()
const Feedback = require('../models/Feedback.js')

//get all the feedback saved in the backend.
router.get('/',async(req, res) => {
    try {
        const feedback = await Feedback.find()
        res.json(feedback)
    } catch (err) {
        res.json({message:err})
    }
})
//create new feedback
router.post('/',async(req, res) => {
    const feedback = new Feedback({
        feedbacktype: req.body.type,
        name: req.body.name,
        email: req.body.email,
        feedbackMsg:req.body.msg
    })
    try {
        const newFeedback = await feedback.save()
        res.json(newFeedback)
    } catch (err) {
        res.json({message:err})
    }    
})
//get a particular feedback
router.get('/:id', async (req, res) => {
    try {
        const query=req.params.id
        const particularFeedback=await Feedback.findById(query)
        res.json(particularFeedback)
    } catch (err) {
        res.json({message:err})
    }
})
module.exports=router