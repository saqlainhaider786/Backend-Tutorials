const express=require("express");
const {handleSignUp,handleLogIn}=require("../Controller/userController")
const userRouter=express.Router();

userRouter.post("/",handleSignUp);
userRouter.post("/login",handleLogIn);
module.exports=userRouter