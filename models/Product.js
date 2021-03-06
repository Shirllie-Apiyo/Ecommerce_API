const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title:{type:String, required:true, unique:true},
        desc: {type:String, required:true},
        prod_details:{type:String, required:true},
        img:{type:String, required:true},
        img1:{type:String, required:true},
        img2:{type:String, required:true},
        category:{type:String},
        sub_category:{type:String},
        brand:{type:String},
        size:{ type:String},
        color:{type:String},
        price:{ type:String, required:true},
        desc_price:{type:String, required:true}
},
{timestamps:true}
);
module.exports = mongoose.model("Product", ProductSchema);