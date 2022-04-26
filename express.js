// express.js --- Express application

// Code:

// Libraries
const express = require('express');
const morgan = require('morgan');

// Instantiate express application
const app = express();

// Handle pre-routing middleware
app.use(morgan('dev'));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

// Handle routes
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;

// express.js ends here
