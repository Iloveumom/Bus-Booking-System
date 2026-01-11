
const express=require("express");
const {addBusDetails,getBusDetails}=require("../controllers/busController");
const router=express.Router();
router.post("/add/",addBusDetails);
router.get("/available/:seat",getBusDetails);
module.exports=router;