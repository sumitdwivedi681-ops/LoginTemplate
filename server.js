const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const dataBase = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'logindb'
});

dataBase.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    dataBase.query(sql, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.send('✅Login successful! Welcome ' + username + '<h2>');
        } else {
            res.send('❌Login failed! Invalid username or password.<h2>');
        }
    });
});

app.listen(3000, () => {
    console.log('🚀Server is running on http://localhost:3000');
});