// shopper.js --- Controller functions for shopper model

// Code:

// Libraries
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./../config');

// Modules
const config = require('./../config');
const Shopper = require('./../model/shopper');

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

    // Save shopper to database
    const result = await Shopper.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    // Generate token
    const token = jwt.sign({ username: username }, config.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Send shopper username + token + message in response (if successful)
    response.status(201).json({
      username: result.username,
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
        .json({ message: 'Invalid username or password!' });
    }

    const token = jwt.sign({ username: username }, config.JWT_SECRET, {
      expiresIn: '1h',
    });

    response.status(200).json({
      username: existingShopper.username,
      token: token,
      message: 'Shopper login successful!',
    });
  } catch (error) {
    response.status(400).json({ message: 'Error! Shopper login failed!' });

    console.log(error);
  }
};

module.exports = { registerShopper, loginShopper };

// shopper.js ends here
