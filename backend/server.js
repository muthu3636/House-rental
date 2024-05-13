const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql06",
  database: "rent",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS ContactForm (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255),
      subject VARCHAR(255),
      message TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Error creating ContactForm table:", err);
      return;
    }
    console.log("ContactForm table created successfully");
  });
});

app.use(express.json());


app.post("/submit-contact-form", (req, res) => {
  const { name, email, subject, message } = req.body;
  const insertQuery =
    "INSERT INTO ContactForm (name, email, subject, message) VALUES (?, ?, ?, ?)";
  const values = [name, email, subject, message];

  connection.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error("Error inserting data into ContactForm table:", err);
      res.status(500).json({ error: "Failed to submit contact form" });
      return;
    }
    console.log("Data inserted into ContactForm table successfully");
    res.status(201).json({ message: "Contact form submitted successfully" });
  });
});


app.listen(PORT, () => {
  console.log("Server is running on http://localhost:${PORT}");
});