const dotenv = require('dotenv')
dotenv.config();

const express = require("express") 

const userRoute = require("./routes/user.route")

const cookieParser = require("cookie-parser");

const connectDB = require("./db/connectDB")

connectDB();

const app = express();


app.use(express.json());
app.use(cookieParser());



app.use("/users",userRoute);

module.exports = app;
