const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cokkieParser = require("cookie-parser");
const connectDB=require("./config/db")
app.use(cokkieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const userRoutes=require("./routes/user")
const dataroutes=require("./routes/dataroutes")
const path = require("path");
app.listen(9000, () => {
    console.log("App is running at 9000");
})

connectDB()

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
// mongoose.connect(`mongodb://localhost:27017/msdlab`)
//     .then(() => {
//         console.log("Database is Connected");
//     })
//     .catch((err)=>{
//         console.log("error in DB");
//     })

// const connectdb = async () => {
//     try {
//         await mongoose.connect('mongodb+srv://chaudharylalan28:lalan1234@cluster0.98gqw0v.mongodb.net/MSDTESTS?retryWrites=true&w=majority&appName=Cluster0', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             autoIndex: true
//         });
//         console.log("Connected to MongoDB Atlas");
//     } catch (err) {
//         console.log("Error connecting to MongoDB Atlas:", err);
//         process.exit(1); // Exit process with failure
//     }
// };
app.use("/",userRoutes);
app.use("/data",dataroutes)