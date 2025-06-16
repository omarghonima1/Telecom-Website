const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000; // Set Express server port to 3000 or another suitable port

// Create a connection pool to the database
const db = mysql.createPool({
    host: 'localhost',
    user: 'omar', // your MySQL username
    password: '2294923omar', // your MySQL password
    database: 'Milestone2DB_24', // Correctly reference your database without backticks
    connectionLimit: 10 // Pool size limit
});

// Serve static files (like HTML, CSS, JS)
app.use(express.static('public'));



// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM customer_profile'; // SQL query to get all data from the 'users' table
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query', err);
            return res.status(500).send('Server error');
        }
        res.json(results);  // Send the retrieved data back as JSON
    });
});
