// URL - Uniform Resource Locator.

// Contains three things : 
// i) Protocol e.g https (hyper text tranfer protocol secure)
// ii) Domain - userfriendly name of the ip address of the server.
// iii) Path - by default root path i.e "/". Path can be nested or 
// query parameter can also be merged with the path.
// Query parameter always starts with "?".

// e.g https://www.google.com/

const url= require("url");
const http=require("http");

const myServer=http.createServer((req,res)=>{
    // const reqLink=url.parse(req.url);

// To get user's searched queries (id,username etc) as object, .parse() is
// used with "true" as 2nd parameter.

    const reqLink=url.parse(req.url,true)
    res.end((`Hi ${reqLink.query.myName}, Welcome to our website...!`));
})


myServer.listen(7866,()=>console.log("Loading!.."))
