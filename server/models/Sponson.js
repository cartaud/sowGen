const { Schema } = require('mongoose');

//When adding fields to schema, make sure to update CreatePortfolio form to gather new fields data
const sponsonSchema = new Schema({
  tube: {
    type: String,
    required: false,
    },
  mbcs: {
    type: String,
    required: false,
    },
  retainers: {
    type: String,
    required: false,
  },
  transomStraps: {
    type: String,
    required: false,
  },
  sponsonGasket: {
    type: String,
    required: false,
  }
});

module.exports = sponsonSchema;