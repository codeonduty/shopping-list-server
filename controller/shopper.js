// shopper.js --- API functions for the shopper model

// Commentary:

// `/controller/shopper.js' defines functions, on the shopper model, that are
// accessable via defined API endpoints.

// `/controller/shopper.js' defines functions to:
//
//   - Register a shopper
//   - Login a shopper
//   - Delete a shopper

// Libraries:

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Modules:

const config = require('./../config');

const Shopper = require('./../model/shopper');

// Code:

// Register a shopper
const registerShopper = async (request, response) => {
  // Extract shopper details from request body
  const { username, email, password } = request.body;

  try {
    // Find the matching shopper in database
    const existingUser = await Shopper.findOne({ username });

    // Handle collision when shopper already exists
    if (existingUser) {
      return response.status(400).json({ message: 'Shopper already exists!' });
    }

    // Protect password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Save shopper to database and reference the response
    const result = await Shopper.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    // Generate token
    const token = jwt.sign({ username: result.username }, config.JWT_SECRET, {
      expiresIn: config.MAXIMUM_TOKEN_AGE,
    });

    // Send shopper username + token + message in response (if successful)
    response.status(201).json({
      result,
      token: token,
      message: 'Shopper registration successful!',
    });
  } catch (error) {
    // Send JSON object with error message in response
    response
      .status(400)
      .json({ message: 'Error! Shopper registration failed!' });

    console.log(error);
  }
};

// TODO: Login a shopper
const loginShopper = () => {};

// TODO: Delete a shopper
const deleteShopper = () => {};

module.exports = { registerShopper, loginShopper, deleteShopper };

// shopper.js ends here
