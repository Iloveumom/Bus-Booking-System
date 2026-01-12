const { DataTypes } = require("sequelize");
const db = require("../utils/db_connection");

const payments = db.define("Payments", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  amountPaid: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = payments;
