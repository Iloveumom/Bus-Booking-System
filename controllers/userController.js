const db=require("../utils/db_connection");
const getAllUsers=(req,res)=>{
    const getuserQuery="select * from  users";
    db.execute(getuserQuery,(err,result)=>{
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
const addUser=(req,res)=>{
    const {name,email}=req.body;
    const insertuserQuery="insert into users(name,email)values(?,?)";
    db.execute(insertuserQuery,[name,email],(err,result)=>{
        if(err)
        {
            console.log(err);
            res.status(500).send(err);
            return
        }
        res.status(200).send("user add success");
    })
};
module.exports={getAllUsers,addUser}
