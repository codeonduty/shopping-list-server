// list.js --- API routes for the list model

// Commentary:

// `/route/list.js' defines API endpoints that perform functions on the
// list model in the database.

// `/route/list.js' defines endpoints to:
//
//   - Fetch a shopper's lists
//   - Add to a shopper's lists
//   - Delete a shopper's lists

// Libraries:

const express = require('express');

// Modules:

// Controllers
const { fetchLists, addList, deleteList } = require('./../controller/list');

// Code:

// Instantiate router
const router = express.Router();

// @desc Fetch all lists
// @route GET /api/shopper/list
// @access Public
router.get('/shopper/list', fetchLists);

// @desc Add a list
// @route POST /api/shopper/list/add
// @access Privileged
router.post('/shopper/list/:id', addList);

// @desc Delete a list using list ID
// @route DELETE /api/shopper/list/delete/:id
// @access Privileged
router.delete('/shopper/list/:id', deleteList);

module.exports = router;

// list.js ends here
