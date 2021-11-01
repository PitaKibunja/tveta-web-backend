const express = require('express')
const router = express.Router()
const Course=require('../models/courses.js')
//Routes

//get all the members details
router.get('/',async(req, res) => {
    try {
        const courses = await Course.find()
        res.json(courses)
        

    } catch (err) {
        res.json({message:err})
    }
})
//create new members
router.post('/',async(req, res) => {
    const course = new Course({
        name: req.body.name,
        img: req.body.img,
        position: req.body.position,
        details:req.body.details
    })
    try {
        const newCourse = await course.save()
        res.json(newCourse)
    } catch (err) {
        res.json({message:err})
    }    
})
module.exports=router