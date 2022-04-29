// list.js --- List schema in the database

// Libraries:

const mongoose = require('mongoose');

// Modules:

// None

// Code:

const ListSchema = mongoose.Schema(
  {
    shopper: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Shopper',
    },

    listItems: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Item',
        },

        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const List = mongoose.model('List', ListSchema);

module.exports = List;

// list.js ends here
