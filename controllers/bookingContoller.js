const Booking=require("../models/booking");
const createBooking=async (req,res)=>{
    try{
          const {userId,busId,seatNumber}=req.body;
          console.log
          const result=await Booking.create({
            UserId:userId,
            BusId:busId,
            seatNumber:seatNumber
          });
           return  res.status(201).json({result});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:err.message});
    } 
};
module.exports={
    createBooking
}
