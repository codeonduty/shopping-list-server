// shopper.js --- API routes for the shopper model

// Commentary:

// `/route/shopper.js' defines the API endpoints that perform functions on the
// shopper model in the database.

// `/route/shopper.js' defines endpoints to:
//
//   - Register a shopper
//   - Login a shopper
//   - Update a shopper
//   - Delete a shopper

// Libraries:

const express = require('express');

// Modules:

// Controllers
const {
  registerShopper,
  loginShopper,
  deleteShopper,
} = require('./../controller/shopper');

// Code:

// Modules

// Instantiate router
const router = express.Router();

// @desc Register shopper
// @route POST /api/shopper/register
// @access Public
router.post('/shopper/register', registerShopper);

// @desc Login shopper (fetch token)
// @route POST /api/shopper/login
// @access Public
router.post('/shopper/login', loginShopper);

// @desc Delete shopper
// @route POST /api/shopper/delete
// @access Privileged
router.post('/shopper/delete', deleteShopper);

module.exports = router;

// shopper.js ends here
