const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql06",
  database: "rentup",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }


  console.log("Connected to MySQL database");
  // const createTableQuery = `

  // ALTER TABLE users
  // ADD COLUMN IF NOT EXISTS email VARCHAR(255);
  // `;

  // connection.query(createTableQuery, (err, result) => {
  //   if (err) {
  //     console.error("Error creating ContactForm table:", err);
  //     return;
  //   }
  //   console.log("ContactForm table created successfully");
  // });
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
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.post("/submit-book-form", (req, res) => {
  const {
    name,
    email,
    phone,
    userType,
    houseType,
    address,
    moveInDate,
    stayDuration,
  } = req.body;
  const query =
    "INSERT INTO bookings (name, email, phone, userType, houseType, address, moveInDate, stayDuration) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    query,
    [
      name,
      email,
      phone,
      userType,
      houseType,
      address,
      moveInDate,
      stayDuration,
    ],
    (err, results) => {
      if (err) {
        console.error("Failed to insert data: " + err.stack);
        res.status(500).send("Failed to submit the form");
        return;
      }
      res.send("Form submitted successfully!");
    }
  );
});

// Start the server
// appl.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// const db1 = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'mysql06',
//   database: 'rent'
// });

// db1.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('MySQL Connected...');
// });

// API endpoint to handle form submission
app.post("/submit-apartment", (req, res) => {
  const {
    name,
    email,
    phone,
    userType,
    houseType,
    address,
    moveInDate,
    stayDuration,
    paymentMode,
  } = req.body;

  console.log(req.body);
  const query =
    "INSERT INTO BOOKINGS (name, email, phone, userType, houseType, address, moveInDate, stayDuration, paymentMode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  connection.query(
    query,
    [
      name,
      email,
      phone,
      userType,
      houseType,
      address,
      moveInDate,
      stayDuration,
      paymentMode,
    ],
    (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        res.status(500).json("Internal Server Error");
        return;
      }
      res.status(200).json("Form submitted successfully");
    }
  );
});

app.post('/login', (req, res) => {
  const { name, email, password } = req.body;

  // Insert user data into MySQL
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  connection.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('User inserted into database');
      res.status(200).json({ message: 'User registered successfully' });
    }
  });
});

// Start server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

app.post('/admin/submit', (req, res) => {
  console.log(req.body);
  const { name, type, squareFeet, amount, rent, location, price } = req.body;
  const sql = 'INSERT INTO house_details (name, type, squareFeet, amount, rent, location, price) VALUES (?, ?, ?, ?, ?, ?, ?)';
  connection.query(sql, [name, type, squareFeet, amount, rent, location, price], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).send('Failed to submit house details.');
      return;
    }
    res.send('House details submitted successfully.');
  });
});

app.get('/admin/houses', (req, res) => {
  const sql = 'SELECT * FROM house_details';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data from the database:', err);
      res.status(500).send('Failed to fetch house details.');
      return;
    }
    console.log(results);
    res.json(results);
  });
});