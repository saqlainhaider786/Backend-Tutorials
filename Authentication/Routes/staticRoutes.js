const express=require("express");
const staticRoute=express.Router();

staticRoute.get("/signup",(req,res)=>{
    res.render("signup");
})

module.exports=staticRoute;