const { Schema } = require('mongoose');

const electricalSchema = new Schema({
    navLights: {
    type: String,
    required: false,
    },
    anchorLight: {
    type: String,
    required: false,
    },
    horn: {
    type: String,
    required: false,
    },
    bilgePump: {
    type: String,
    required: false,
    },
    pumpLed: {
    type: String,
    required: false,
    },
    floatSwitch: {
    type: String,
    required: false,
    },
    controlSwitches: {
    type: String,
    required: false,
    },
    trimSwitches: {
    type: String,
    required: false,
    },
    trimGauge: {
    type: String,
    required: false,
    },
    trimLed: {
    type: String,
    required: false,
    },
    trimPump: {
    type: String,
    required: false,
    },
    chargingBreaker: {
    type: String,
    required: false,
    },
    preHeaterBreaker: {
    type: String,
    required: false,
    },
    polarityLed: {
    type: String,
    required: false,
    },
    vhfRadio: {
    type: String,
    required: false,
    },
    vhfAntenna: {
    type: String,
    required: false,
    },
    gps: {
    type: String,
    required: false,
    },
    smartcraft: {
    type: String,
    required: false,
    },
    whelenControl: {
    type: String,
    required: false,
    },
    whelenMic: {
    type: String,
    required: false,
    },
    whelenSpeaker: {
    type: String,
    required: false,
    },
    strobe: {
    type: String,
    required: false,
    },
    spotlight: {
    type: String,
    required: false,
    },
    receptacles: {
    type: String,
    required: false,
    },
    mobiDisplay: {
    type: String,
    required: false,
    },
    mobiPower: {
    type: String,
    required: false,
    },
    mobiData: {
    type: String,
    required: false,
    },
    mobiAntenna: {
    type: String,
    required: false,
    },
    barrelSwitch: {
    type: String,
    required: false,
    },
    batteries: {
    type: String,
    required: false,
    },
    batteryCables: {
    type: String,
    required: false,
    },
    batteryCharger: {
    type: String,
    required: false,
    },
    interiorBreakers: {
    type: String,
    required: false,
    },
});

module.exports = electricalSchema;