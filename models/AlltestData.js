const mongoose=require("mongoose");

const AllTestSchema=new mongoose.Schema(
    {
        title:String,
        Body:String,
        price:Number,
        fasting:String,
        report:String,
        sampleType:String
    }
)

const AllTest=new mongoose.model("AllTest",AllTestSchema);

module.exports=AllTest;