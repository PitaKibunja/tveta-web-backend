const express = require('express')
const router = express.Router()
const Users = require('../models/User')
const bcrypt=require('bcrypt')
//1.Get all the users in the database.
router.get('/', async (req, res) => {
    try {
        //get all the users in the database
        const users = await Users.find()
        res.json(users)
    } catch (err) {
        res.json({
            message: 'Error',
            error:err
        })
    }
})
//2.create a new user into the database.
router.post('/', async (req, res) => {
    var hashedPassword
    const fullname = req.body.fullname
    const email = req.body.email
    const role = req.body.roles
    const rawpassword = req.body.password
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 12)      
    } catch (err) {
        console.log({
            message: 'Could not hash the password',
            error:err
        })
    }
    // bcrypt.hash(rawpassword, 12).then(hash => {
    //     hashedPassword=hash
    // }).catch(err => console.log(err));
    
    
    const twofactor= req.body.twofactor
    
    //create an object with all the users data.
    const newUser = new Users({
        fullName: fullname,
        email:email,
        roles: role,
        password: rawpassword,
        twofactorAuth:twofactor
    })
    // console.log(newUser)
    try {
        //save the data to the database.
        const user = await newUser.save()
        res.json({
            message: 'success',
            user
        })
    } catch (err) {
        res.json({
            message: 'failure',
            error:err.message
        })
    }
})
//3.Get a specific user with their id
router.get('/:id', async (req, res) => {
    try {
        const specificUser = await Users.findById(req.params.id)
        res.json(specificUser)
        
    } catch (err) {
        res.json({
            message: 'failure',
            error:err
        })
    }
})
//4.Update user details

//5.Delete that specific user
router.delete('/:userId', async (req, res) => {
    const userID=req.params.userId
    try {
        const deletedUser = await Users.findByIdAndDelete(userID)
        console.log(deletedUser)
        res.json({
            message:'success',
            user:deletedUser
        })
    } catch (err) {
        res.json({
            message: 'failure',
            error:err
        })
    }
})
module.exports=router