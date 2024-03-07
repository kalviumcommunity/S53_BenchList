const mongoose = require("mongoose");

const productSchema=new mongoose.Schema({
    placename:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
    },
    image:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    }
})

const User= new mongoose.model("areas",productSchema)
module.exports=User