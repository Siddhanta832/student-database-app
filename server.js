<<<<<<< HEAD
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '12345',
  port: 5432,
});

pool.query(`
  CREATE TABLE IF NOT EXISTS students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    roll_number INT UNIQUE NOT NULL,
    date_of_birth DATE NOT NULL,
    place VARCHAR(100)
  )
`).then(() => console.log("Database table 'students' connected and ready."))
  .catch(err => console.error("Database connection error:", err.message));

app.post('/add-student', async (req, res) => {
  const { name, roll_number, date_of_birth, place } = req.body;

  try {
    await pool.query(
      'INSERT INTO students (name, roll_number, date_of_birth, place) VALUES ($1, $2, $3, $4)',
      [name, roll_number, date_of_birth, place]
    );
    res.send(`
      <h2 style="color: green;">Data successfully submitted!</h2>
      <a href="/">Add Another Student</a>
    `);
  } catch (err) {
    console.error('Insert Error:', err.message);
    res.status(500).send('Error inserting data into database: ' + err.message);
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
=======
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '12345',
  port: 5432,
});

pool.query(`
  CREATE TABLE IF NOT EXISTS students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    roll_number INT UNIQUE NOT NULL,
    date_of_birth DATE NOT NULL,
    place VARCHAR(100)
  )
`).then(() => console.log("Database table 'students' connected and ready."))
  .catch(err => console.error("Database connection error:", err.message));

app.post('/add-student', async (req, res) => {
  const { name, roll_number, date_of_birth, place } = req.body;

  try {
    await pool.query(
      'INSERT INTO students (name, roll_number, date_of_birth, place) VALUES ($1, $2, $3, $4)',
      [name, roll_number, date_of_birth, place]
    );
    res.send(`
      <h2 style="color: green;">Data successfully submitted!</h2>
      <a href="/">Add Another Student</a>
    `);
  } catch (err) {
    console.error('Insert Error:', err.message);
    res.status(500).send('Error inserting data into database: ' + err.message);
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
>>>>>>> f9b5ecde48bee497e159a8667dd253e729642da7
});