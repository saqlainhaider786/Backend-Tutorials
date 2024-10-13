/*
=============================   Middleware  =============================

==> It refers to a function which has access to request, response object
and the next middleware function in the application's request-response cycle.

==> It is used to perform various tasks such as :

i) Authentication & Authorization.
ii) Logging and error handling.
iii) Parsing request bodies (e.g JSON, URL-Encoded etc).
iv) Serving static files.
v) Validating request data. and more.

--> To make custom middleware we use app.use((handler)).
*/

const express=require("express");
const app=express();
const myport=8000;

// Defining middleware for each http request.

// app.use((req,res,next)=>{
//     console.log("Middleware executed on each request!..");
//     next();
// })

// Defining middleware for particular http request.

// app.use('/aboutUs',(req,res,next)=>{
//     console.log("Middleware only executed on aboutUs.");
//     res.end("Hello from aboutUs.");
// })

app.use((req,res,next)=>{
    const age=req.query.age;
    if(!age){
        res.end("Age is mandertory!..")
    }
    (age>18)?next():res.json({msg:"Below age!.."})
})
app.get("/",(req,res)=>{
    res.end("Hello from middleware tutorial!...");
})

app.listen(myport,()=>console.log(`Hosted on localhost:${myport}`));