const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const userRoute = require('./routes/user_route');

// const cookieParser = require('cookie-parser'); 
const dotenv = require('dotenv');
require('./db/db');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();
// app.use(cookieParser());



app.use('/user',userRoute);

app.listen(5000);