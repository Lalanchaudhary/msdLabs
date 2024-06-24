const express = require("express");
const router = express.Router();

const { login, signup } = require("../controller/auth");
const { auth } = require("../middleware/auth");
const Usermodel=require("../models/user") // Import the Person model
const requestModel = require('../models/resquest');

// Authentication routes
router.post("/signup", signup);
router.post("/login", login);

// Protected routes
router.get("/test", auth, (req, res) => {
    res.status(200).json({
        success: true,
        message: "the user is authentic"
    }); 
});



router.get("/profile", auth, async (req, res) => {
    try {
        const currentUser = await Usermodel.findOne({ _id: req.user.id });

        if (!currentUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user: currentUser
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});


router.get("/users",async(req,res)=>{
    const Users=await Usermodel.find();
    res.send(Users)
})

module.exports = router