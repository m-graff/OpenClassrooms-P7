// Imporation mysql 
const mysql = require('mysql2');  

// Création de la connexion à la base de données MySQL
const db = mysql.createConnection ({ 
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
});

module.exports = db;


