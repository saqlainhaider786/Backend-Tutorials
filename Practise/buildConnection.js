const mongoose=require("mongoose");

const BuildConnection=(dbPath)=>mongoose.connect(dbPath).then(()=>console.log("Mongo DB is Connected Successfully!")).catch(err=>console.log(err));

module.exports=BuildConnection;