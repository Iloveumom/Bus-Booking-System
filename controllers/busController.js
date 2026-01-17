const Buses=require("../models/buses");
const Booking=require("../models/booking");
const users=require("../models/users");
const getBusDetails=async (req,res)=>{
    try
    {
        const seats=req.params.seat;
    
        if (isNaN(seats))
        {
            return res.status(400).json({ message: "Invalid seats value" });
        }
        const buses = await Buses.findAll({
                where: {
                    availableSeats: {
                        [Op.gt]: Math.max(10, seats)
                    }
                }
        });
        res.status(200).json(buses);
    }
    catch(err)
    {    
            console.log(err);
            res.status(500).send(err);
     
    }
};
const addBusDetails=async (req,res)=>{
   
    try{
            console.log(req.body);
            const {busNumber,totalSeats,availableSeats}=req.body;
            const result=await Buses.create({
                busNumber:busNumber,
                totalSeats:totalSeats,
                availableSeats:availableSeats               
            })
            res.status(200).json({result});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:err.message});
    }
};
const getBusBookings=async (req,res)=>{
    const busid=req.params.id;
    try{
            const bookings = await Booking.findAll({
            where: { BusId: busid },
            attributes: ["id", "seatNumber"],
            include: [
                {
                model: users,
                attributes: ["name","email"]
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
module.exports={addBusDetails,getBusDetails,getBusBookings}
