const { Schema, model } = require('mongoose');
const hullSchema = require('./Hull')
const sponsonSchema = require('./Sponson')
const propulsionSchema = require('./Propulsion');
const pipingSchema = require('./Piping');
const engineSchema = require('./Engine');
const electricalSchema = require('./Electrical');
const deckSchema = require('./Deck');

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
  },
  engine: {
    type: [engineSchema]
  },
  electrical: {
    type: [electricalSchema]
  },
  deck: {
    type: [deckSchema]
  }
});

const Assessment = model('Assessment', assessmentSchema);

module.exports = Assessment;