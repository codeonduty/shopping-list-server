// config.js --- Project-wide configuration

// Code:

const config = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI:
    process.env.MONGODB_URI || 'mongodb://localhost:27017/shopping-list',
  JWT_SECRET: process.env.JWT_SECRET || "mum's the word",
};

module.exports = config;

// config.js ends here
