// item.js --- Controller functions for item model

const Item = require('./../model/item');

// Fetch all items from database
const fetchItems = async (request, response) => {
  const items = await Item.find({});

  response.json(items);
};

export { fetchItems };

// item.js ends here
