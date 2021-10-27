const express = require('express')
const router = express.Router()
const Trainer=require('../models/trainers')
//Routes

//get all the members details
router.get('/',async(req, res) => {
    try {
        const trainers = await Trainer.find()
        res.json(trainers)

    } catch (err) {
        res.json({message:err})
    }
})
//create new members
router.post('/',async(req, res) => {
    const trainer = new Trainer({
        regno: req.body.regno,
        expdate: req.body.expdate,
        fullname: req.body.fullname,
        specialization: req.body.specialization,
        cluster: req.body.cluster,
        status:req.body.status
    })
    console.log(trainer)
    try {
        const newTrainer = await trainer.save()
        res.json(newTrainer)
    } catch (err) {
        res.json({message:err})
    }

    

    
})

module.exports=router