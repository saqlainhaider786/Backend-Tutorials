const express=require("express");
const router=express.Router();
const {handleGetAll,handleGetById,handlePostUser,patchById,deleteById}=require("../Controller/index")

router.route("/").get(handleGetAll).post(handlePostUser);

router.route("/:id").get(handleGetById).patch(patchById).delete(deleteById);

module.exports=router;   