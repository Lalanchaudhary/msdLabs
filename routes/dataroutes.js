const express = require("express")
const app = express.Router()
const Test = require("../models/TestData");
const Alltest = require("../models/AlltestData");


app.get("/", async (req, res) => {
    try {
        const data = await Test.find();
        res.send(data);
    }
    catch (err) {
        console.log("data lete time", err);
    }

})

app.post("/", (req, res) => {

    const { title, Body, price } = req.body;
    const test1 = new Test({
        title: title,
        Body: Body,
        price: price
    })

    test1.save()
        .then((data) => {
            console.log("Hnn ji ho gaya", data);
        })
        .catch((err) => {
            console.log("last time error", err);
        })
})

app.get("/delete/:id", async (req, res) => {
    const { id } = req.params;
    await Alltest.deleteOne({ _id: id })
        .then((res) => {
            console.log(res);
        })
})

app.get("/test", async (req, res) => {
    try {
        const data = await Alltest.find();
        res.send(data);
    }
    catch (err) {
        console.log("data lete time", err);
    }

})


app.put("/update/:id",async(req,res)=>{
    const {id}=req.params;
    const {title,Body,price,fasting,report,sampleType }=req.body;
    console.log(id); 
    console.log(req.body);
    await Alltest.updateOne({_id:id},{
      $set:{
        title:title,
        Body: Body,
        price: price,
        fasting: fasting,
        report: report,
        sampleType:sampleType
      }
    })
    .then((res)=>{
      console.log(res);
    })
  })
  
  app.post("/addtest", (req, res) => {

    const { title, Body, price,fasting,report,sampleType } = req.body;
    const test1 = new Alltest({
        title: title,
        Body: Body,
        price: price,
        fasting:fasting,
        report:report,
        sampleType:sampleType
    })

    test1.save()
        .then((data) => {
            console.log("Hnn ji ho gaya", data);
        })
        .catch((err) => {
            console.log("last time error", err);
        })
})

module.exports=app