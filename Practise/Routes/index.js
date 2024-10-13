const express=require("express");
const accRouter=express.Router();
const {handleGetAll,handleGetById,handleNewUser,handleDelete}=require("../Controller/index");

accRouter.route("/").get(handleGetAll).post(handleNewUser);
accRouter.route("/:id").get(handleGetById).delete(handleDelete);

module.exports=accRouter;