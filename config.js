// config.js --- Project-wide configuration

// Code:

const config = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    'mongodb://localhost:27017/grocery-shopping-list',
};

module.exports = config;

// config.js ends here
