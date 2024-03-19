const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/dbconfig')
//to load the env file, below method is used
dotenv.config({
    path: './config/config.env'
});
// const logger = require('./middleware/logger')
connectDB();

const bootcamp = require('./route/bootcamps')

const app = express();

//Body parser
app.use(express.json())

//Dev loggin middleware
// app.use(logger) ...this code is not in use instead we can use morgan
//use morgan is used to log the execution flow in console
if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'))
}

//mount the router
app.use('/api/v1/bootcamps', bootcamp)

const PORT = process.env.PORT || 5700

// app.listen(PORT, () => {
//     console.log(`server is running on ${process.env.NODE_ENV} mode, @ http://localhost:${PORT}`)
// })

const server = app.listen(PORT, () => {
    console.log(`server is running on ${process.env.NODE_ENV} mode, @ http://localhost:${PORT}`.red.bold)
})

//handle unhandled promise object
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error ${err.message}`)
    server.close(() => process.exit(1).red.bold)
})