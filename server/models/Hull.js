const { Schema } = require('mongoose');

//When adding fields to schema, make sure to update CreatePortfolio form to gather new fields data
const hullSchema = new Schema({
  fiberGlass: {
    type: String,
    required: false,
    },
gelCoat: {
    type: String,
    required: false,
}
});

module.exports = hullSchema;