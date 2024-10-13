const express=require("express");
const router=express.Router();
const path=require("path")
const data=require("../Data/blogsData");

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/index.html"));
})

router.get("/blog",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/blogs.html"));
}
)

router.get("/blog/:slug",(req,res)=>{
    let reqBlog=data.filter((e)=>e.slug==req.params.slug);
    console.log(reqBlog)
    res.sendFile(path.join(__dirname,"../templates/blogcard.html"));
}
)

module.exports=router;