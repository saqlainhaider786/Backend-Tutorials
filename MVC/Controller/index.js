const user=require("../Model/users");

const handleGetAll=async(req,res)=>{
    const allUsers=await user.find({})// retrieves all DB collections
    const html=`
    <ol>
    ${allUsers.map((user)=>`<li>${user.last_name} - ${user.gender} - ${user._id}</li>`).join("")}
    </ol>
    `;

    res.send(html)
}

const handleGetById=async(req,res)=>{

    const seachingUser=await user.findById(req.params.id)
    if(!seachingUser){
        res.status(404).json({msg:"Not Found the User!.."});
    }
    res.status(201).json(seachingUser);
}

const handlePostUser=async(req,res)=>{
    // I have to create new user.
    const newUser=req.body;    
    if(
        !newUser||
        !newUser.first_name||
        !newUser.last_name||
        !newUser.email||
        !newUser.job_title||
        !newUser.gender
    ){
    return res.status(400).json({msg:"All fields are required!..."});
    }

const result= await user.create({
        first_name:newUser.first_name,
        last_name:newUser.last_name,
        email:newUser.email,
        job_title:newUser.job_title,
        gender:newUser.gender
    });
console.log("Result ",result);
res.status(201).json({msg:"User Created Successfully!..."});
}

const patchById=async (req,res)=>{
    const updatedData=req.body;
    (!updatedData)&&res.json({msg:"Required Data is not given!..."});
    await user.findByIdAndUpdate(req.params.id,{
        first_name:updatedData.first_name,
        last_name:updatedData.last_name,
        email:updatedData.email,
        gender:updatedData.gender,
        job_title:updatedData.job_title

    });
    res.json({msg:"Updated Data Successfully!...",id:req.params.id});

}

const deleteById=async(req,res)=>{
    await user.findByIdAndDelete(req.params.id);
    res.json({msg:"Successfully, Deleted Data!...",id:req.params.id});
}

module.exports={
    handleGetAll,
    handleGetById,
    handlePostUser,
    patchById,
    deleteById
}