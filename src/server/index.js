const express = require("express");
const sql = require("mssql");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER, 
  database: process.env.DB_NAME,
  options: {
    encrypt: true, 
  },
};

app.post("/api/register-farm", async (req, res) => {
  const { farmName, email, phone } = req.body;

  try {
    let pool = await sql.connect(dbConfig);
    await pool
      .request()
      .input("FarmName", sql.NVarChar, farmName)
      .input("Email", sql.NVarChar, email)
      .input("Phone", sql.NVarChar, phone)
      .query(
        "INSERT INTO PreRegistration (FarmName, Email, Phone) VALUES (@FarmName, @Email, @Phone)"
      );

    res.status(200).send("Registration successful!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving data.");
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});