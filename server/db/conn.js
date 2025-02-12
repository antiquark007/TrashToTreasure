const mongoose=require("mongoose")
require('dotenv').config();


const DB = process.env.PASSWORD || 'if it dont work then use password here xdxd';


mongoose.connect(DB)
.then(()=>console.log("Database Connected")).catch((er)=>{
    console.log("error in connection")
})