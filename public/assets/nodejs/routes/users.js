const express = require('express');
const router = express.Router();
const connection = require('../db/db');

// Create
router.post('/create', (req, res) => {
  const { username, password } = req.body;
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  connection.query(query, [username, password], (err, results) => {
    if (err) throw err;
    res.send('User created successfully');
  });
});

// Read
router.get('/', (req, res) => {
  const query = 'SELECT * FROM users';
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Update
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  const query = 'UPDATE users SET username = ?, password = ? WHERE id = ?';
  connection.query(query, [username, password, id], (err, results) => {
    if (err) throw err;
    res.send('User updated successfully');
  });
});

// Delete
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) throw err;
    res.send('User deleted successfully');
  });
});

module.exports = router;