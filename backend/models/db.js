import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config(); 

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "Aathi@2004",
  database: process.env.DB_NAME || "certificatedb"
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log(`✅ Database connected: ${process.env.DB_NAME || "certificatedb"}`);
  }
});

export default db;
