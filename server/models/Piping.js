const { Schema } = require('mongoose');

const pipingSchema = new Schema({
  seacock: {
    type: String,
    required: false,
    },
  seacockHose: {
    type: String,
    required: false,
    },
  strainer: {
    type: String,
    required: false,
  },
  strainerHose: {
    type: String,
    required: false,
  },
  fuelHoses: {
    type: String,
    required: false,
  },
  fuelStripping: {
    type: String,
    required: false,
    },
  flocs: {
    type: String,
    required: false,
    },
  racorHousing: {
    type: String,
    required: false,
  },
  racorFilter: {
    type: String,
    required: false,
  },
  fuelTank: {
    type: String,
    required: false,
  },
  exhaustHose: {
    type: String,
    required: false,
    },
});

module.exports = pipingSchema;