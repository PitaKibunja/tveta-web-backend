const Posts = require("../models/posts")

exports.deletePost = async (req,res) => {
    try {
        const removedPost = await Posts.findByIdAndDelete(req.params.id)
        res.status(200).json({
            msg: 'success',
            removedPost
        })
    } catch (error) {
        res.status(500).json({
                msg: 'delete failed',
                error,
        })
    }
}
exports.specificPost= async (req, res) => {
    try {
        const specificPost = await Posts.findById(req.params.id)
        res.status(200).json({
            msg: 'success',
            specificPost
        })
    } catch (err) {
        res.status(500).json({
            msg: 'failure',
            error:err
        })
    }
}
exports.newPost= async (req, res) => {
    const title = req.body.title
    const body = req.body.editorData
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
}
exports.allPosts= async (req, res) => {
    try {
        if (req.query.scategory) {
            const ncate=req.query.scategory
            const scate = await Posts.find({
                category:ncate
            })
            if (typeof scate !== 'undefined' && scate.length > 0) {
                res.json(scate)
            } else {
                res.json({
                    message:'error',
                    error: 'No such category found'
                })
            }
            
        } else {
            const posts = await Posts.find()
            res.json(posts)
        }
       
    } catch (err) {
        res.json({
            message:'error',
            error: err
        })
    }
}
exports.updatePost = async (req, res) => {
    
}