const db=require("../utils/db_connection");
const Users=require("../models/users");
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
module.exports={getAllUsers,addUser}
