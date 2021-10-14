const mysql = require('mysql2');
const password = require('dotenv').config();

//connect server to database
const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        database: 'employee_tracker',
    },
    console.log('Connected to the employee tracker database.')
);

module.exports = db;