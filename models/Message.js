const mongoose = require ("mongoose");

const MessageSchema = new mongoose.Schema(
    {
     
        message: {type:String, required:true},
        rating :{type:Number, required:true},
        id:{type:String, required:true},
       
    },
{timestamps:true}
);
module.exports = mongoose.model("Message",MessageSchema);