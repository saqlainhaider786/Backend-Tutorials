const express=require("express");
const ssrRoute=express.Router();
const users=require("../Model/accHolders");

ssrRoute.get("/",async (req,res)=>{
    const allUsers=await users.find({});

    res.render("usersList",{
        renderData:allUsers
    })
});

module.exports=ssrRoute;