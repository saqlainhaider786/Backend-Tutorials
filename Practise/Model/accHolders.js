const mongoose=require("mongoose");

const accHolderSchema=mongoose.Schema({
    accHolderName:{
        type:String,
        required:true
    },
    accType:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    phNumber:{
        type:String,
        required:true
    }
});

const accHolder=mongoose.model("accHolder",accHolderSchema);

module.exports=accHolder;