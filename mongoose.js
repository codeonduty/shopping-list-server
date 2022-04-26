// mongoose.js --- Mongoose entry point

// Code:

// Libraries
const mongoose = require('mongoose');

// Uses JavaScript Promise instead
mongoose.Promise = global.Promise;

// Handle database connection response
mongoose.connection
  .once('open', function () {
    console.log('Database connection successful...');
  })
  .on('error', () => {
    console.log(`Database connection failure...`, error);
  });

module.exports = mongoose;

// mongoose.js ends here
