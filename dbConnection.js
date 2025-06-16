const sql = require('mssql');

// Connection configuration for SQL Server
const config = {
  server: 'localhost', // The SQL Server hostname (can also use an IP address)
  database: 'Milestone2DB_24', // Corrected database name (no spaces)
  user: 'omar', // Replace with your actual SQL username
  password: '2294923omar', // Replace with your actual password
  options: {
    encrypt: true, // Use encryption (for Azure SQL or local SQL with encryption)
    trustServerCertificate: true // Disable SSL validation for local testing
  }
};

// Connect to the database
const connectToDatabase = async () => {
  try {
    await sql.connect(config);
    console.log('Connected to SQL Server');
  } catch (err) {
    console.error('Database connection failed:', err
      
    );
  }
};

// Export the SQL object for querying
module.exports = sql;
