const mongoose=require("mongoose");//step 1

const connectMongo=(url)=>mongoose.connect(url).then(()=>console.log("Mongo DB is connect successfully!...")).catch((err)=>console.log("Mongo DB error ",err));

module.exports=connectMongo;