const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
require('dotenv/config')

//import routes
const boardRoute = require('./routes/board')
const trainerRoute=require('./routes/trainers')
const institutionRoute=require('./routes/institutions')
const courseRoute = require('./routes/courses')
const navRoute=require('./routes/navigation')
const feedbackRoute=require('./routes/Feedback')
//use cors to allow access of data from the front-end
app.use(cors({
    origin:'*'
}))

app.use(express.json());
app.use('/api_v_1/board', boardRoute)
app.use('/api_v_1/trainers',trainerRoute)
app.use('/api_v_1/institution',institutionRoute)
app.use('/api_v_1/navs',navRoute)
app.use('/api_v_1/courses', courseRoute)
app.use('/api_v_1/feedback',feedbackRoute)
//connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to db'))
//start the server
app.listen(3000)