// In this tutorial Project01's Data is being used!...

/*

==============================     Summary     ==============================

==> All mongo tasks are performed asynchronously.

=> To interact with mongo DB : 
    i. Import mongoose.
   ii. Connect mongo DB using path.This will return promise, handle it also.
  iii. Define schema(structure) of the storing data.
   iv. Create model of that schema, this will return an object of the schema.
    v. Use that object to work.

 */
const mongoose=require("mongoose");//step 1
const express=require("express");
const app=express();

//step 2
// Connecting mongo using mongoose

mongoose.connect("mongodb://127.0.0.1:27017/myUsers")//returns a promise
.then(()=>console.log("Mongo DB is connect successfully!..."))
.catch((err)=>console.log("Mongo DB error ",err));


const userSchema=mongoose.Schema({//step3
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    job_title:{
        type:String,

    },
    gender:{
        type:String
    }
});

// step4 - mongoose.model("model_name",model_schema);
const user=mongoose.model("user",userSchema);//"user with model() is coll_name"
//now user(its methods) is use to interact with mongo

app.use(express.urlencoded({extended:false})); // This makes req.body useable.

app.get("/",(req,res)=>res.end("Use any command to see results.!"));

// Task 1
app.get("/users",async(req,res)=>{
    const allUsers=await user.find({})// retrieves all DB collections
    const html=`
    <ol>
    ${allUsers.map((user)=>`<li>${user.last_name} - ${user.gender}</li>`).join("")}
    </ol>
    `;

    res.send(html)
});

// Task 2
app.get("/api/users",async(req,res)=>res.json(await user.find({})))

// Task 3

app.get("/api/users/:userId",async(req,res)=>{

    const seachingUser=await user.findById(req.params.userId)
    if(!seachingUser){
        res.status(404).json({msg:"Not Found the User!.."});
    }
    res.status(201).json(seachingUser);
})

// Task 4 - C of CRUD Operations

app.post("/api/users",async(req,res)=>{
    // I have to create new user.
    const newUser=req.body;// req.body gives us all the provided data
                           // but to use it we have require middleware. line-6
    
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
})

// Task 5 & 6 : U and D of CRUD operations

app.route("/api/users/:id").patch( async (req,res)=>{
    // Edit user with :id
    //findByIdAndUpdate(req.params.id,{changes as object});
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

}).delete(async(req,res)=>{
    await user.findByIdAndDelete(req.params.id);
    console.log('Deleted Data ',delData);
    res.json({msg:"Successfully, Deleted Data!...",id:req.params.id});
})

app.listen(7866,()=>console.log(`Hosted on http://localhost:${7866}/`));