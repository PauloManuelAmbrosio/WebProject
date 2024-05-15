const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'myapp'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectando ao banco de dados');
});

module.exports = connection;