const db=require('./utils/db_connection');
// require("./models/users");
// require("./models/buses");
// require("./models/payment");
// require("./models/booking");
//include all model with this syntax
require("./models")
const express=require("express");
const userRoute=require("./routes/userRoute");
const busRoute=require("./routes/busRoute");
const bookingRoute=require("./routes/bookingRoute");
const app=express();
app.get("/",(req,res)=>{
        res.send("heelooo testing");
})
app.use(express.json());
app.use("/users",userRoute);
app.use("/buses",busRoute);
app.use("/bookings",bookingRoute);
db.sync()
.then((res)=>{
        app.listen(3000,()=>{
           console.log("server running");
})
}).catch((err)=>{
        console.log(err);
});