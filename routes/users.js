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
    bcrypt.hash(rawpassword, 12).then(hash => {
        hashedPassword=hash
    }).catch(err => console.log(err));
    
    const password = hashedPassword
    const twofactor= req.body.twofactor
    
    //create an object with all the users data.
    const newUser = new Users({
        fullName: fullname,
        email:email,
        roles: role,
        password: password,
        twofactorAuth:twofactor
    })
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
            error:err
        })
    }
})