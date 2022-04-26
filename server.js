// server.js --- Server entry point

// Commentary:

// This module does the following:

// 1. Initializes the database (establishes the connection and handles error)
// 2. Initializes the server (establishes the server and handles the error)

// Code:

// Modules
const config = require('./config');
const database = require('./mongoose');
const server = require('./express');

// Initialize database
database.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialize server
server.listen(config.PORT, (error) => {
  if (error) console.log(error);

  console.info('Server initiated on port %s...', config.PORT);
});

// server.js ends here
