const accHolders=require("../Model/accHolders");
const express=require("express");
const app=express();

app.use(express.urlencoded({extended:false}));

// To get All users
const handleGetAll=async(req,res)=>{
     const allUsers=await accHolders.find({});
     if(allUsers.length<=0){
        res.json({msg:"No user exists!..."});
     }
     else{
         const layout=`<ol>
         ${allUsers.map((user)=>`<li><h1>${user._id} - ${user.accHolderName} - ${user.phNumber}</h1></li>`).join("")}
         </ol>
         `;
    
         res.status(200).send(layout);
     }
}

// To get user by id
const handleGetById=async(req,res)=>{
    const userId=req.params.id;
    const reqRes=await accHolders.findById(userId);

    res.status(200).json(reqRes);
}

// To create new user

const handleNewUser=async(req,res)=>{
    const newUser=req.body;

    if(
    !newUser||
    !newUser.accHolderName||
    !newUser.phNumber||
    !newUser.accType||
    !newUser.DOB
    ){
        res.status(400).json({msg:"All fields are required!.."});
    }
    else{
       await accHolders.create({
        accHolderName:newUser.accHolderName,
        phNumber:newUser.phNumber,
        accType:newUser.accType,
        DOB:newUser.DOB
       })

       res.status(201).json({msg:"New User Created Successfully!..."});
    }
}

// To delete user by Id.
const handleDelete=async(req,res)=>{
    const id=req.params.id;
    await accHolders.findByIdAndDelete(id);

    res.status(200).json({msg:"User Deleted Successfully!..."})
}

module.exports={handleGetAll,handleGetById,handleNewUser,handleDelete};