const express = require('express')
const router = express.Router()
const PCategory = require('../models/postCategories')

//1.Get all the categories in the database to display
router.get('/', async (req, res) => {
    try {
        const allcategories = await PCategory.find()
        res.json(allcategories)
    } catch (err) {
        res.json({message:err})
    }
})
//2.Create a new category.
router.post('/', async (req, res) => {
    const cate = new PCategory({
        category: req.body.category,
        subcategory: req.body.subcategory,
        // jlink: link //make sure the link is obtained before save
    })
    try {
        const newCategory = await cate.save()
        res.json(newCategory)
    } catch (err) {
        res.json({message:err})
    }
})
module.exports=router