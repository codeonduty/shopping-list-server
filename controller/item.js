// item.js --- API functions for the item model

// Commentary:

// `/controller/item.js' defines functions, on the item model, that are
// accessable via defined API endpoints.

// `/controller/item.js' defines functions to:
//
//   - Fetch an item
//   - Fetch the catalogue of items
//   - Update an item

// Libraries:

// None

// Modules:

const Item = require('./../model/item');

// Code:

// TODO: Fetch an item
const fetchCatalogue = async (request, response) => {
  // Query the database
  const items = await Item.find({});

  // Send catalogue in response
  response.json(items);
};

// TODO: Fetch the catalogue of items
const fetchItem = async (request, response) => {
  // Query the database
  const item = await Item.findById(request.params.id);

  // If item is found, send in response
  if (item) {
    response.json(item);
  } else {
    // Return error if item is not found
    response.status(404).json({ message: 'Item not found!' });
  }
};

// TODO: Update an item
const updateItem = () => {};

module.exports = { fetchCatalogue, fetchItem, updateItem };

// item.js ends here
