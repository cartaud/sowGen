const { Schema, model } = require('mongoose');
const hullSchema = require('./Hull')
const sponsonSchema = require('./Sponson')
const propulsionSchema = require('./Propulsion');
const pipingSchema = require('./Piping');

//When adding fields to schema, make sure to update CreatePortfolio form to gather new fields data
const assessmentSchema = new Schema({
  hullNumber: {
    type: String,
    required: true,
    },
  hull: {
    type: [hullSchema]
  },
  sponson: {
    type: [sponsonSchema]
  },
  propulsion: {
    type: [propulsionSchema]
  },
  piping: {
    type: [pipingSchema]
  }
});

const Assessment = model('Assessment', assessmentSchema);

module.exports = Assessment;