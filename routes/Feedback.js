const express = require('express')
const router = express.Router()
var nodemailer = require('nodemailer');
const Feedback = require('../models/Feedback.js')

//setup the mailler
var transporter = nodemailer.createTransport({
    host: "mail.tveta.go.ke",
    port: 25,
    auth: {
      user: "webmaster@tveta.go.ke",
      pass: "Teln3t.20!#"
    }
});
let sender=null
let receiver=null
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
    const email1 = 'webmaster@tveta.go.ke'
    const feedbackMsg = req.body.feedbackMsg
    const testmail = 'pitakibunja@gmail.com'

    
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
            const sender = email1
            const receiver='accounts@tveta.go.ke'
        } else if (feedbacktype == 'Corruption Reporting') {
            const sender = email1
            const receiver='peter.kibunja@tveta.go.ke'
        } else if (feedbacktype == 'Complaints') {
            const sender = email1
            const receiver='pitakibunja@gmail.com'
        } else if (feedbacktype == 'Customer Feedback') {
            const sender = email1
            const receiver='peternkibunja@gmail.com'
        }
        await transporter.sendMail({
            from: sender,
            to: receiver,
            subject: feedbacktype,
            html: `<p>
            ${feedbackMsg}
            Name:${name}
            email:${email}
            </p>`
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