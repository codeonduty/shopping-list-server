// shopper.js --- Route handler for Shopper model operations

// Code:

// Libraries
const express = require('express');

// Modules
const { registerShopper, loginShopper } = require('./../controller/shopper');

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

module.exports = router;

// shopper.js ends here
