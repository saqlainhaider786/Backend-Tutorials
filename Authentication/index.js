// ====================     Authentication Patterns     ====================

/*
==> There are two patterns of Authentication.

=> Stateful : maintains state or data 

--> Uid is tranferred using :
        i) Cookies
       ii) Response
      iii) Headers

=> Stateless : Which has no state

*/

// To demonstrate Authentication using project3.

const mongo=require("mongoose");
const connectMongo=require("./Controllers/connectMongo");
const express=require("express");
const app=express();
const path=require("path");
const router=require("./Routes/index");
const bookRoomRouter = require("./Routes/bookRoom");
const userRouter=require("./Routes/user")
connectMongo();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.resolve("./Views"));

app.get("/getRoom",bookRoomRouter);
app.use("/",router);
app.use("/user",userRouter)

app.listen(3000,()=>{console.log("Hosted on http://localhost:3000")});