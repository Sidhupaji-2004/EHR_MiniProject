const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dotenv config
dotenv.config();// I wasn't giving the path thats why config wasn't happening
// mongodb connection
connectDB();

//rest object
const app = express()

//middlewares
app.use(express.json());
app.use(moragan('dev'));

//routes set-up
app.use('/api/v1/user', require('./routes/userRoutes'));


//listen port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server running in ${process.env.DEV_MODE} Mode on port ${process.env.PORT}`.bgBlue.white)
})