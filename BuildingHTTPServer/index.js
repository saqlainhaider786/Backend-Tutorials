// To create any server using node js we will user http.

// const http=require("http");

// ================== Creating Server ==================

// http.createServer((req,res)=>{}) :

// i) this method creates a server.
// ii ) It accepts a callback with two parameters :
// i.request : contains all info about the request(userId,ip address etc).
// ii. response : decides what action has to be responded.

// const myServer=http.createServer((req,res)=>{
//     console.log("New Requrest Received!..");
//     res.end("Hello From Server");
// })

// ================== Initialising Port ==================

// myServer.listen(port,callback) :

// It is used to initialise a port to the Server.
// Callback is used to handle success case.

// myServer.listen(8000,()=>console.log("Successfully started!.."));


// ================== Assignment ==================

// Q. Use file module to store log of requests sent to the server

// const fs=require("fs");
// const http=require("http");

// fs.writeFile("./Log.txt","Writing Log\n",(err)=>{err&&console.log(err)});

// const myServer=http.createServer((req,res)=>{
//     fs.appendFile("./Log.txt",`New Record : ${Date.now()}\n`,(err)=>{
//         err&&console.log(err);
//         res.end("New Record is added!...");
//     });
// })

// myServer.listen(8001,()=>{console.log("Started!..")})

// Q. Sending back data to the user according to the url(request path);

const http = require("http");

const servr = http.createServer((req, res) => {
    let userUrl = req.url;

    switch (userUrl) {
        case "/":
            res.end("Requested for home page.");
            break;
        case "/contactUs":
            res.end("Requested for Contact page.");
            break;
        case "/about":
            res.end("Requested for about page.");
            break;
    }
})

servr.listen(7866, () => { console.log("Listening") })