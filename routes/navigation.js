const express = require('express')
const router = express.Router()
const Nav = require('../models/navigation')

//Routes

//get all the navigation items.
router.get('/', async (req, res) => {
    try {
        const navItems = await Nav.find()
        res.json(navItems)
    } catch (err) {
        res.json({message:err})
    }
})
//create a new nav item
router.post('/', async (req, res) => {
    const newItem = new Nav({
        title: req.body.title,
        path: req.body.path,
        icon:req.body.icon
    })
    try {
        const newNav = await newItem.save()
        res.json(newNav)
    }catch (err) {
        res.json({message:err})
    }
})
module.exports=router