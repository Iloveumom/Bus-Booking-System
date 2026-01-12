const { DataTypes } = require("sequelize");
const db = require("../utils/db_connection");

const bookings = db.define("Bookings", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  seatNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = bookings;
