const express = require('express')
const router = express.Router()
const Institution=require('../models/institutions.js')
//Routes

//get all the members details
router.get('/',async(req, res) => {
    try {
        const institution = await Institution.find()
        res.json(institution)

    } catch (err) {
        res.json({message:err})
    }
})
//create new members
router.post('/',async(req, res) => {
    const institution = new Institution({
        name: req.body.name,
        img: req.body.img,
        position: req.body.position,
        details:req.body.details
    })
    try {
        const newInstitution = await institution.save()
        res.json(newInstitution)
    } catch (err) {
        res.json({message:err})
    }

    

    
})
//get single institution data
router.get('/:id', async(req, res) => {
    try {
        const institutionDetails = await Institution.findById(req.params.id)
        res.json(institutionDetails)
    } catch (err) {
        res.json({message:err})
    }
})
module.exports=router