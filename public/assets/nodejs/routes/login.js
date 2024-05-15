const express = require('express');
const router = express.Router();
const connection = require('../db/db');

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.query(query, [username, password], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.send('Login bem-sucedido');
    } else {
      res.send('Nome de usúario ou senha inválidos');
    }
  });
});

module.exports = router;