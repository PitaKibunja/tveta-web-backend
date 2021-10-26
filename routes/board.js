const express = require('express')
const router = express.Router()
const Board=require('../models/board')
//Routes

//get all the members details
router.get('/',async(req, res) => {
    try {
        const members = await Board.find()
        res.json(members)

    } catch (err) {
        res.json({message:err})
    }
})
//create new members
router.post('/',async(req, res) => {
    const member = new Board({
        name: req.body.name,
        img: req.body.img,
        position: req.body.position,
        details:req.body.details
    })
    try {
        const newMember = await member.save()
        res.json(newMember)
    } catch (err) {
        res.json({message:err})
    }

    

    
})

module.exports=router