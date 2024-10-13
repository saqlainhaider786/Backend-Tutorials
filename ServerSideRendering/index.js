// ======================   Server Side Rendering   =======================

/*

==> SSR is used to make views.
==> In SSR html is rendered from server side as request's response.
==> In express EJS is used for SSR.

 */

// ==============     Rewriting the project01 with MVC approach   ==============

const express=require("express");
const connectMongo=require("./connection");
const app=express();
const router=require("./Routes/index");
const staticRoute=require("./Routes/staticRouter");
const userRoute=require("./Routes/userRoute")
const path=require("path");

connectMongo("mongodb://127.0.0.1:27017/Auth-Users");
      
app.use(express.urlencoded({extended:false})); // This makes req.body useable.
app.use(express.json());

// used to set SSR Engine
app.set("view engine","ejs");// app.set("view engine","engine_name")
// Used to tell the views file path.
app.set("views",path.resolve("./Views"));//app.set("views",path.resolve("views_path"));

app.use("/",staticRoute);
app.use('/authuser',userRoute)
app.use("/user",router);

app.listen(7866,()=>console.log(`Hosted on http://localhost:${7866}/`));