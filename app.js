const express=require("express");
const userRoute=require("./routes/userRoute");
const busRoute=require("./routes/busRoute");
const app=express();
app.use(express.json());
app.use("/users",userRoute);
app.use("/buses",busRoute);
app.listen(3000,()=>{
    console.log("server running");
})