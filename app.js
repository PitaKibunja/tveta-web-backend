const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
require('dotenv/config')

//import routes
const postRoute = require('./routes/board')

//use cors to allow access of data from the front-end
app.use(cors({
    origin:'*'
}))

app.use(express.json());
app.use('/api_v_1/board', postRoute)
//connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to db'))
//start the server
app.listen(3000)