const { Schema } = require('mongoose');

const engineSchema = new Schema({
  enginePaint: {
    type: String,
    required: false,
    },
  engineOil: {
    type: String,
    required: false,
    },
  oilFilter: {
    type: String,
    required: false,
    },
  oilHoses: {
    type: String,
    required: false,
    },
  fuelFilter: {
    type: String,
    required: false,
    },
  fuelHoses: {
    type: String,
    required: false,
    },
  coolant: {
    type: String,
    required: false,
    },
  coolantCap: {
    type: String,
    required: false,
    },
  waterPump: {
    type: String,
    required: false,
    },
  afterCooler: {
    type: String,
    required: false,
    },
  heatExchanger: {
    type: String,
    required: false,
    },
  waterHoses: {
    type: String,
    required: false,
    },
  zincs: {
    type: String,
    required: false,
    },
  starter: {
    type: String,
    required: false,
    },
  alternator: {
    type: String,
    required: false,
    },
  ecm: {
    type: String,
    required: false,
    },
  motorMounts: {
    type: String,
    required: false,
    },
  mountingBrackets: {
    type: String,
    required: false,
    },
  turbo: {
    type: String,
    required: false,
    },
  turboOilLine: {
    type: String,
    required: false,
    },
  turboCoolantLine: {
    type: String,
    required: false,
    },
  waterBelt: {
    type: String,
    required: false,
    },
  driveBelt: {
    type: String,
    required: false,
    },
  beltGuard: {
    type: String,
    required: false,
    },
});

module.exports = engineSchema;