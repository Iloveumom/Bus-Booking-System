const db=require('./utils/db_connection');
require("./models/users");
require("./models/buses");
require("./models/payment");
require("./models/booking");
const express=require("express");
const userRoute=require("./routes/userRoute");
const busRoute=require("./routes/busRoute");
const app=express();
app.use(express.json());
app.use("/users",userRoute);
app.use("/buses",busRoute);
db.sync()
.then((res)=>{
        app.listen(3000,()=>{
           console.log("server running");
})
}).catch((err)=>{
        console.log(err);
});