const express=require("express");
const {createBooking}=require("../controllers/bookingContoller");
const router=express.Router();
router.post("/",createBooking);
module.exports=router;