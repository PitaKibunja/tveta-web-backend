const express=require('express')
const router=express.Router()
const filesController=require('../controllers/files')


//1.Get all the files
router.get('/', filesController.getAllFiles)

//2.get the form details and save them in the database.
// router.post('/uploadFile',upload.single('myFile'),filesController.createAFile)

//3.Create a fileable file in the website

