const express=require("express");
const app=express();
const connectMongo=require("./buildConnection");
const routes=require("./Routes/index");
const path=require("path");
const staticRoutes=require("./Routes/staticRoutes");

connectMongo("mongodb://127.0.0.1:27017/accountHolders");

app.use(express.urlencoded({extended:false}));

app.set("view engine","ejs");
app.set("views",path.resolve("./Views"));

app.use("/usersList",staticRoutes);
app.use("/allUsers",routes);

app.listen(1000,()=>console.log("hosted on localhost:1000"));