const express = require('express')
const router = express.Router()
const Posts = require('../models/posts')


//1.Get all the posts that are in the database.
router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find()
        res.json({
            message: 'success',
            posts
        })
    } catch (err) {
        res.json({
            message:'error',
            error: err
        })
    }
})
//2.create a new post
router.post('/', async (req, res) => {
    const title = req.body.title
    const body = req.body.content
    const category = req.body.category

    const post = new Posts({
        title: title,
        body: body,
        category: category
    })
    try {
        const newPost = await post.save()
        res.json({
            message: 'success',
            newPost
        })
    } catch (err) {
        res.json({
            message: 'failure',
            error:err
        })
    }
})
//3.Get a specific post
router.get('/:id', async (req, res) => {
    try {
        const specificPost = await Posts.findById(req.params.id)
        res.json({
            message: 'success',
            specificPost
        })
    } catch (err) {
        res.json({
            message: 'failure',
            error:err
        })
    }
})
module.exports=router