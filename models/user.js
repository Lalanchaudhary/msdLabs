const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String , 
        enum:["Male","Female"]
    },
    email: {
        type: String,
        required: true,
        trim:true,
        unique: true
    },
    mobile_no:{
        type:Number,
        required:true
    },
    password: {
        type: String,
        required: true,
        trim:true
    },

 })

 module.exports = mongoose.model("User",userSchema)