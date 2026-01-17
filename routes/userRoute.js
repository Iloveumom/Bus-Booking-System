const express=require("express");
const {getAllUsers,addUser,getUserBookings}=require("../controllers/userController");
const router=express.Router();
router.get("/fetch/",getAllUsers);
router.post("/add/",addUser);
router.get("/:id/bookings",getUserBookings);
module.exports=router;