// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();

// Import your database pool
const { pool } = require('../db');

// GET route
router.get('/data', (req, res) => {
  pool.query('SELECT * FROM public."ContactUser"', (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result.rows);
  });
});

// POST route (example)
router.post('/data', (req, res) => {
  const { contactid, fullname, description, createddt, phonenumber, email, intention } = req.body;

  pool.query(
  
    `INSERT INTO public."ContactUser" 
    (contactid, fullname, description, createddt, phonenumber, email, intention) 
    VALUES ($1, $2, $3, $4, $5, $6, $7) 
    RETURNING *`,
    
  
    [contactid, fullname, description, createddt, phonenumber, email, intention],
    
    (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Failed to insert data' });
      }
      res.json(result.rows[0]);
    }
  );
});

module.exports = router;