const mongoose = require("mongoose");

const productSchema=new mongoose.Schema({
    placeName:{
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
    img:{
        type:String,
        required:true,
    }
})

const User= new mongoose.model("areas",productSchema)
module.exports=User