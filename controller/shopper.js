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

    // Send response
    response.status(201).json({
      result,
      token: token,
      message: 'Shopper registration successful!',
    });
  } catch (error) {
    response
      .status(400)
      .json({ message: 'Error! Shopper registration failed!' });

    console.log(error);
  }
};

// TODO: Login a shopper
const loginShopper = async (request, response) => {
  // Extract shopper details from  request body
  const { username, password } = request.body;

  try {
    // Find the matching shopper in database
    const existingShopper = await Shopper.findOne({ username });

    // Handle non-existent shopper
    if (!existingShopper) {
      return response
        .status(401)
        .json({ message: 'Invalid username or password!' });
    }

    // Validate password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingShopper.password
    );
    if (!isPasswordCorrect) {
      return response
        .status(400)
        .json({ message: 'Invalid username or password!' }); // Invalid credentials
    }

    const token = jwt.sign({ username: username }, config.JWT_SECRET, {
      expiresIn: config.MAXIMUM_TOKEN_AGE,
    });

    response.status(200).json({
      result: existingShopper,
      token: token,
      message: 'Shopper login successful!',
    });
  } catch (error) {
    response.status(400).json({ message: 'Error! Shopper login failed!' });

    console.log(error);
  }
};

// TODO: Delete a shopper
const deleteShopper = () => {};

module.exports = { registerShopper, loginShopper, deleteShopper };

// shopper.js ends here
