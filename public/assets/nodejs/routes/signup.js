const express = require('express');
const router = express.Router();
const connection = require('../db/db');

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  connection.query(query, [username, password], (err, results) => {
    if (err) throw err;
    res.send('Usuário criado com sucesso');
  });
});

module.exports = router;