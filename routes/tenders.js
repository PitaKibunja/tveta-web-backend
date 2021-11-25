const express = require('express')
const router = express.Router()
const Tenders = require('../models/tenders')

//1.Get all the tenders
router.get('/', async (req, res) => {
    try {
        const tenders = await Tenders.find()
        res.json(tenders)
    } catch (err) {
        res.json({message:err})
    }
})
//2.create a new tender
router.post('/', async (req, res) => {
    const tender = new Tenders({
        refno: req.body.reference,
        tname: req.body.tname,
        openingdate: req.date,
         //get the link of the document.
    })
    console.log(tender)
    try {
        const newTender = await tender.save()
        res.json(newTender)
    } catch (err) {
        res.json({message:err})
    }
})
//3.Get a specific tender details.
router.get('/:id', async (req, res) => {
    try {
        const tenderDetails = await Tenders.findById(req.params.id)
        res.json(tenderDetails)
    } catch (err) {
        res.json({message:err})
    }
})
//4.Update the tender details.
// router.patch('/:Tid', async (req, res) => {
//     try {
//         const updatedTender = await Tenders.updateOne({ _id: req.params.Tid },
//         {$set:{tit}})
//     }
// })
//5.delete the tenders details.(also consider auto)
router.post('/:Tid', async (req,res) => {
    try {
        const removedTender = await Tenders.remove({ _id: req.params.Tid })
        res.json(removedTender)
    } catch (err) {
        res.json({message:err})
    }
})
module.exports=router