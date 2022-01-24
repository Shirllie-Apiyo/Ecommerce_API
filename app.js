const express = require ("express");
const app = express();
const mongoose = require("mongoose");


mongoose
    .connect("mongodb+srv://customer:customer@project.wsekr.mongodb.net/shop?retryWrites=true&w=majority"
    ).then(() =>  console.log("Db Connection Successful!"))
    .catch((err) =>{
        console.log(err);
});
app.listen(5000, () =>{
    console.log("Server Running at http://127.0.0.1:5000");
});