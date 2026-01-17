const Users=require("../models/users");
const Booking=require("../models/booking");
const Bus=require("../models/buses");

const getAllUsers=async (req,res)=>{
    try{
          const result=await Users.findAll();
           return  res.status(200).send(result);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    } 
};

const addUser=async (req,res)=>{
    const {name,email}=req.body;
    try{
            await Users.create({
                name:name,
                email:email
            })
           return  res.status(200).send(`User ${name}insert succ`);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
};
const getUserBookings=async (req,res)=>{
    const userid=req.params.id;
    try{
            const bookings = await Booking.findAll({
            where: { userId: userid },
            attributes: ["id", "seatNumber"],
            include: [
                {
                model: Bus,
                attributes: ["busNumber"]
                }
            ]
            });
           return  res.status(200).json({bookings});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:err.message});
    }
};
module.exports={getAllUsers,addUser,getUserBookings}
