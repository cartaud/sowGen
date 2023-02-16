const { Schema } = require('mongoose');

//When adding fields to schema, make sure to update CreatePortfolio form to gather new fields data
const propulsionSchema = new Schema({
  outdrive: {
    type: String,
    required: false,
    },
  outdrivePaint: {
    type: String,
    required: false,
    },
  propeller: {
    type: String,
    required: false,
  },
  tillerBracket: {
    type: String,
    required: false,
  },
  trimHoses: {
    type: String,
    required: false,
  },
  trimCylinders: {
    type: String,
    required: false,
    },
  outdriveZincs: {
    type: String,
    required: false,
    },
  outdriveGrounding: {
    type: String,
    required: false,
  },
  bellows: {
    type: String,
    required: false,
  },
  outdriveReservoir: {
    type: String,
    required: false,
  },
  interiorTrimHose: {
    type: String,
    required: false,
    },
  trimPump: {
    type: String,
    required: false,
    },
  trimSolenoids: {
    type: String,
    required: false,
  },
  trimBracket: {
    type: String,
    required: false,
  },
  driveshaft: {
    type: String,
    required: false,
  },
  aftHoop: {
    type: String,
    required: false,
  },
  aftBearing: {
    type: String,
    required: false,
  },
  forwardHoop: { 
    type: String,
    required: false,
  },
  forwardBearing: {
    type: String,
    required: false,
  },
  shiftCables: {
    type: String,
    required: false,
  },
  throttleCable: {
    type: String,
    required: false,
  },
  cableBracket: {
    type: String,
    required: false,
  },
  controlHead: {
    type: String,
    required: false,
  },
  throttlePlacard: {
    type: String,
    required: false,
  },
});

module.exports = propulsionSchema;