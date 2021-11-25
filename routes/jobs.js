const express = require('express')
const router = express.Router()
const Jobs = require('../models/jobs')

//1.Get all the jobs in the database to display
router.get('/', async (req, res) => {
    try {
        const jobs = await Jobs.find()
        res.json(jobs)
    } catch (err) {
        res.json({message:err})
    }
})

//2.create new job.
router.post('/', async (req, res) => {
    const job = new Jobs({
        jref: req.body.ref,
        jname: req.body.name,
        jclose: req.body.jclose,
        jlink: link //make sure the link is obtained before save
    })
    try {
        const newJob = await job.save()
        res.json(newJob)
    } catch (err) {
        res.json({message:err})
    }
})
//3.Get a particular job details.
router.get('/:id', async (req, res) => {
    try {
        const jobDetails = await Jobs.findById(req.params.id)
        res.json(jobDetails)
    } catch (err) {
        res.json({message:err})
    }
})
//4.update the jobs details in the db.

//5.delete the job details from db