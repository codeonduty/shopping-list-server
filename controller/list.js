// list.js --- API functions for the list model

const List = require('../model/list');
const Shopper = require('../model/shopper');

// Commentary:

// `/controller/list.js' defines functions, on the list model, that are
// accessable via defined API endpoints.

// `/controller/list.js' defines functions to:
//
//   - Fetch a shopper's lists
//   - Add a shopper's list
//   - Delete a shopper's lists

// Libraries:

// Modules:

// Code:

// TODO: Fetch a shopper's lists
const fetchLists = async () => {
  // Query the database
  const lists = await List.find({});

  // Send catalogue in response
  response.json(lists);
};

// TODO: Add a shopper's list
const addList = async (request, response) => {
  const { username, items } = request.body;

  try {
    // Find shopper from database
    const shopper = Shopper.findOne({ username });

    // Save shopping list to database
    const result = await List.create({
      shopper: shopper,
      items: items,
    });

    response.status(201).json({
      message: 'Shopping list checkout successful!',
    });
  } catch (error) {
    response
      .status(400)
      .json({ message: 'Error! Shopping list checkout failed!' });
  }
};

// TODO: Delete a shopper's lists
const deleteList = () => {};

module.exports = { fetchLists, addList, deleteList };

// list.js ends here
