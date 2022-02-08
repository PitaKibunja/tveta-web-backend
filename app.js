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
const feedbackRoute = require('./routes/Feedback')
const tendersRoute = require('./routes/tenders')
// const jobsRoute=require('./routes/jobs')
const jobsRoute=require('./routes/jobs')
const categoryRoute = require('./routes/Pcategory')
const postsRoute = require('./routes/posts')
const usersRoute=require('./routes/users')
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
app.use('/api_v_1/feedback', feedbackRoute)
app.use('/api_v_1/tenders', tendersRoute)
app.use('/api_v_1/jobs',jobsRoute)
app.use('/api_v_1/Admin/posts/category', categoryRoute)
app.use('/api_v_1/Admin/posts/post', postsRoute)
app.use('/api_v_1/Admin/dashboard/management', usersRoute)
// app.use('/api_v_1/jobs',jobsRoute)
//connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to db'))
//start the server
app.listen(process.env.PORT)
