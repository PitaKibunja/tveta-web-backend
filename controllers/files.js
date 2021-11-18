const File = require('../models/downloads.js')

//1.get the data from the database
exports.getAllFiles = async (req, res) => {
    try {
        const files = await File.find()
        res.status(200).json({
            status: 'success',
            files
        })
    } catch (error) {
        res.json({
            status: 'Fail',
            error,
        })
    }
}

//2.get the data from front end and save it to the database.
exports.createAFile=async(req, res) => {
    //add other things here at this section.
    // console.log(req.file)
    const doclink = req.file.filename
    const docsize = req.file.size
    const doctype = req.body.doctype
    const docname=req.body.docname
    const file = new File({
        doctype: doctype,
        name: docname,
        size: docsize,
        link: doclink,
    })
    try {
        const newfile = await file.save()
        res.status(200).json({
            status: 'success',
            message: 'File created successfully',
            newfile
        })
    } catch (error) {
        res.json({
            error
        })
    }
}
