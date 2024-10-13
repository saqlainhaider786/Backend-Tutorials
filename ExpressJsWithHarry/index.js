const express=require("express");
const path=require("path");
const router = require("./Routes/blog");
const app=express();


app.use('/',router);

app.listen(1000,()=>{console.log("Hosted on localhost:1000")});