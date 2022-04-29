// express.js --- Express application

// Code:

// Libraries
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Modules
const shopperRoute = require('./route/shopper');

// Instantiate express application
const app = express();

// Handle pre-routing middleware
app.use(morgan('dev'));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Handle routes
app.use('/api', shopperRoute);

module.exports = app;

// express.js ends here
