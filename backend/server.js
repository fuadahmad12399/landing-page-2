// backend/server.js
require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');
// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Test DB connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err.stack);
  } else {
    console.log('Connected to PostgreSQL at', res.rows[0].now);
  }
});

// Start server
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', dataRoutes); 


app.post('/api/test', (req, res) => {
  console.log('POST /api/test hit');
  res.json({ message: 'Test successful' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});