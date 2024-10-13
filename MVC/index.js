/*
==============================     MVC     ==============================

=> MVC stands for Model View Controller.

--> Controller manipulates the Model. 
--> Model Updates the View.
 */

// ==============     Rewriting the project01 with MVC approach   ==============

const express=require("express");
const connectMongo=require("./connection");
const app=express();
const router=require("./Routes/index")

connectMongo("mongodb://127.0.0.1:27017/myUsers");
      
app.use(express.urlencoded({extended:false})); // This makes req.body useable.

app.get("/",(req,res)=>res.end("Use proper link!..."));

app.use("/user",router);

app.listen(7866,()=>console.log(`Hosted on http://localhost:${7866}/`));