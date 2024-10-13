/*
 ==> Its a framework which internally uses http.
 ==> It makes easy to handle different paths behaviour according to http method.
 ==> It handles everything internally, there is no need to install packages
 */

 const express=require("express");

 let app=express();//here express is an object with methods.
/*
    General syntax to use app's http's_method is :

            app.Method(Path,Handler)
             
        ==> Method can be Get,Post,Patch etc.
        ==> Path can be /,/aboutUs etc.
        ==> Handler is a callback with request and response parameters.
 */
 app.get("/",(req,res)=>{
    res.end(`Hello ${req.query.userName}, Your are on home page using ${req.url}`);
 })

app.get("/aboutUs",(req,res)=>{
    res.end(`Now your are on About Us page using ${req.url}.`);
})

app.listen(7866,()=>console.log("Loading!!..."));