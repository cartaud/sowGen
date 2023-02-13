const { Schema, model } = require('mongoose');
const hullSchema = require('./Hull')

//When adding fields to schema, make sure to update CreatePortfolio form to gather new fields data
const assessmentSchema = new Schema({
  hullNumber: {
    type: String,
    required: true,
    },
  hull: {
    type: [hullSchema]
  },
});


module.exports = assessmentSchema;