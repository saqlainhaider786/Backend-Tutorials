const express=require("express");
const app=express();
const route=express.Router();

route.get("/",(req,res)=>{
    res.render("home");
})

route.get("/about",(req,res)=>{
    res.render("about");
})

module.exports=route;