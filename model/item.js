// item.js --- Item schema in database
const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Item name is required!'],
      unique: [true, 'Item with that name already exists!'],
    },

    brand: {
      type: String,
      required: [true, 'Item brand name is required!'],
    },

    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    stock: {
      type: Number,
      required: [true, 'Item stock quantity is required!'],
      default: 0,
    },

    price: {
      type: Number,
      required: [true, 'Item price is required!'],
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model('item', ItemSchema);

module.exports = Item;

// item.js ends here
