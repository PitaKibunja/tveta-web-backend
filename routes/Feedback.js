const express = require('express')
const router = express.Router()
var nodemailer = require('nodemailer');
const Feedback = require('../models/Feedback.js')
require('dotenv/config')

//setup the mailler
var transporter = nodemailer.createTransport({
    host:  process.env.MAIL_HOST,
    port: 25,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_USER_PASSWORD
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
    const email1 = process.env.MAIL_USER
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
        if (feedbacktype == 'General Enquiry') {
            const sender = email
            const receiver = process.env.GENERAL_ENQUIRY_EMAIL
            await transporter.sendMail({
                from: sender,
                to: receiver,
                subject: feedbacktype,
                html: `<p>
                ${feedbackMsg}
                <br/>
                Name:${name}
                <br/>
                email:${email}
                </p>`
            })
            res.json(newFeedback)
        } else if (feedbacktype == 'Corruption Reporting') {
            const sender = email1
            const receiver = process.env.CORRUPTION_REPORT_EMAIL
            await transporter.sendMail({
                from: sender,
                to: receiver,
                subject: feedbacktype,
                html: `<p>
                ${feedbackMsg}
                <br/>
                Name:${name}<br/>
                email:${email}
                </p>`
            })
            res.json(newFeedback)
        } else if (feedbacktype == 'Complaints') {
            const sender = email
            const receiver = process.env.COMPLAINTS_REPORT_EMAIL
            await transporter.sendMail({
                from: sender,
                to: receiver,
                subject: feedbacktype,
                html: `<p>
                ${feedbackMsg}<br/>
                Name:${name}<br/>
                email:${email}
                </p>`
            })
            res.json(newFeedback)
        } else if (feedbacktype == 'Customer Feedback') {
            const sender = email
            const receiver = process.env.CUSTOMER_FEEDBACK_EMAIL
            await transporter.sendMail({
                from: sender,
                to: receiver,
                subject: feedbacktype,
                html: `<p>
                ${feedbackMsg}<br/>
                Name:${name}<br/>
                email:${email}<br/>
                </p>`
            })
            res.json(newFeedback)
        } else {
            res.json({
                message:"Error occured"
            })
        }

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