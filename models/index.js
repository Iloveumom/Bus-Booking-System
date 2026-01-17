const users=require('./users');
const booking=require("./booking");
const buses=require("./buses");

//one to many
users.hasMany(booking);
booking.belongsTo(users);

buses.hasMany(booking);
booking.belongsTo(buses);


module.exports={
    users,booking
}