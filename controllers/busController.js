const db=require("../utils/db_connection");
const getBusDetails=(req,res)=>{
    const seats=req.params.seat;
   
    if (isNaN(seats))
    {
        return res.status(400).json({ message: "Invalid seats value" });
    }
    const getuserQuery="select * from  buses where availableSeats>10 and availableSeats>?";
    db.execute(getuserQuery,[seats],(err,result)=>{
        //console.log(err,result);
        if(err)
        {
            console.log(err);
            res.status(500).send(err);
            return
        }
        res.status(200).json(result);
    })
};
const addBusDetails=(req,res)=>{
    const {busNumber,totalSeats,availableSeats}=req.body;
    const insertuserQuery="insert into Buses(busNumber,totalSeats,availableSeats)values(?,?,?)";
    db.execute(insertuserQuery,[busNumber,totalSeats,availableSeats],(err,result)=>{
        if(err)
        {
            console.log(err);
            res.status(500).send(err);
            return
        }
        res.status(200).send("bus add success");
    })
};
module.exports={addBusDetails,getBusDetails}
