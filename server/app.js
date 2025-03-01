const express = require('express');
const app = express();
require("./db/conn")
require('dotenv').config();
const router=require('./routes/router')
const cors =require("cors");
const cookiParser=require("cookie-parser")
const port = process.env.PORT || 8010;

app.use(express.json());//this will give the data in json type from frontend
app.use(cookiParser());
app.use(cors());//using cors coz frontend and backend are in different ports for running when dta pss cross origin resource sharing
app.use(router)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})