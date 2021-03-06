const mongoose = require("mongoose");

const SlideSchema = new mongoose.Schema(
    {
        image:{type:String, required:true},
        title:{type:String, required:true},
        thumbImage:{type:String,required:true,},
        alt:{type:String, required:true}
        // desc: {type:String, required:true},
        // img:{type:String, required:true},
        // category:{type:String},
        // sub_category:{type:String},
        // brand:{type:String},
        // size:{ type:String},
        // color:{type:String},
        // price:{ type:Number, required:true},
},
{timestamps:true}
);
module.exports = mongoose.model("Slide", SlideSchema);