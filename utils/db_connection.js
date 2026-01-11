const mysql=require("mysql2");
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root@123",
    database:"BusBookingDB"
});

// SQL for tables
const createUsersTable = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
)`;

const createBusesTable = `
CREATE TABLE IF NOT EXISTS buses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  busNumber VARCHAR(50) NOT NULL,
  totalSeats INT NOT NULL,
  availableSeats INT NOT NULL
)`;

const createBookingsTable = `
CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  seatNumber INT NOT NULL
)`;

const createPaymentsTable = `
CREATE TABLE IF NOT EXISTS payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amountPaid DECIMAL(10,2) NOT NULL,
  paymentStatus VARCHAR(50) NOT NULL
)`;

// Create tables using execute()
async function createTables() {
  try {
    await con.promise().execute(createUsersTable);
    await con.promise().execute(createBusesTable);
    await con.promise().execute(createBookingsTable);
    await con.promise().execute(createPaymentsTable);

    console.log("All tables created successfully");
  } catch (err) {
    console.error("Error creating tables:", err);
  }
}

// Connect DB
con.connect((err) => {
  if (err) {
    console.error(" Database connection failed:", err);
    return;
  }
  console.log("Database connected");
  createTables();
});

module.exports=con;
