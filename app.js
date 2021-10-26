const express = require('express')
const mongoose=require('mongoose')
const app = express()
require('dotenv/config')

//import routes
const postRoute = require('./routes/board')

app.use(express.json());
app.use('/posts', postRoute)
//connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to db'))
//start the server
app.listen(3000)