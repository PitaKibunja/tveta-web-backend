const express = require('express')
const router = express.Router()
const actPosts=require('../controllers/posts')

//1.Get all the posts that are in the database.
router.get('/', actPosts.allPosts)
//2.create a new post
router.post('/', actPosts.newPost)
//3.Get a specific post
router.get('/:id', actPosts.specificPost)
//4.delete a specific post
router.delete('/:id',actPosts.deletePost)
module.exports=router