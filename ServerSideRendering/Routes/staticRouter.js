const express=require("express");
const router=express.Router();
const customers=require("../Model/users");

router.get("/", async (req,res)=>{
    const allCustomers=await customers.find({});
    res.render("home",{
        allData:allCustomers
    });
});

router.get("/signup",(req,res)=>{
    res.render("signup");
})

router.get("/login",(req,res)=>{
    res.render("login");
})
module.exports=router;