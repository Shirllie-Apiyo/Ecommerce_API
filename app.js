const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")


dotenv.config();

mongoose
    .connect
        (process.env.MONGO_URL)
        .then(() =>  console.log("Db Connection Successful!"))
    .catch((err) =>{
        console.log(err);
        
});
app.listen(process.env.PORT || 5000, () =>{
    console.log("Server Running at http://127.0.0.1:5000");
});