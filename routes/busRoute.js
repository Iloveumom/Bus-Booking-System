
const express=require("express");
const {addBusDetails,getBusDetails,getBusBookings}=require("../controllers/busController");
const router=express.Router();
router.post("/add/",addBusDetails);
router.get("/available/:seat",getBusDetails);
router.get("/:id/bookings",getBusBookings);

module.exports=router;