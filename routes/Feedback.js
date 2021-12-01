const express = require('express')
const router = express.Router()
var nodemailer = require('nodemailer');
const Feedback = require('../models/Feedback.js')

//setup the mailler
var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "602544fe38b0e6",
      pass: "019b98ca8025d9"
    }
});
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
router.post('/', async (req, res) => {

    //get all the contents of the post api
    const feedbacktype = req.body.feedbacktype
    const name = req.body.name
    const email = req.body.email
    const feedbackMsg = req.body.feedbackMsg
    
    const feedback = new Feedback({
        feedbacktype: feedbacktype,
        name:name,
        email: email,
        feedbackMsg:feedbackMsg
    })

    //send the mail to tveta mail
    try {
        const newFeedback = await feedback.save()
        await transporter.sendMail({
            from: email,
            to: 'complaints@tveta.go.ke',
            subject: feedbacktype,
            html:`<p>${feedbackMsg}</p>`
        })
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