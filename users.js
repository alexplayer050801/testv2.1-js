const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_mysql_password',
  database: 'example_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM users WHERE id = ?', id, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/users', (req, res) => {
  const user = req.body;
  connection.query('INSERT INTO users SET ?', user, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = req.body;
  connection.query('UPDATE users SET ? WHERE id = ?', [user, id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
