const express=require("express");
const app=express();
const route=require("./Routes/index");

app.set("view engine","ejs");
app.use("/",route);

app.listen(2000,()=>console.log("Hosted on localhost:2000"));