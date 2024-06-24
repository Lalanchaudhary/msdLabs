const mongoose=require("mongoose");

const TestSchema=new mongoose.Schema(
    {
        title:String,
        Body:String,
        price:Number
    }
)

const Test=new mongoose.model("Test",TestSchema);

module.exports=Test;