const { Schema } = require('mongoose');

const deckSchema = new Schema({
    nonskid: {
    type: String,
    required: false,
    },
    fwdHatchGasket: {
    type: String,
    required: false,
    },
    fwdHatchHinge: {
    type: String,
    required: false,
    },
    fwdHatchLatch: {
    type: String,
    required: false,
    },
    fwdHatchStopper: {
    type: String,
    required: false,
    },
    archStowage: {
    type: String,
    required: false,
    },
    archFrame: {
    type: String,
    required: false,
    },
    centerLifeline: {
    type: String,
    required: false,
    },
    fwdSeatCushion: {
    type: String,
    required: false,
    },
    fwdSeatGasket: {
    type: String,
    required: false,
    },
    fwdSeatHinges: {
    type: String,
    required: false,
    },
    fwdSeatLatches: {
    type: String,
    required: false,
    },
    consoleSupportPost: {
    type: String,
    required: false,
    },
    consoleDeckGasket: {
    type: String,
    required: false,
    },
    consoleDeckLatches: {
    type: String,
    required: false,
    },
    consoleDeckHinges: {
    type: String,
    required: false,
    },
    stbdAccessGasket: {
    type: String,
    required: false,
    },
    stbdAccessHinges: {
    type: String,
    required: false,
    },
    stbdAccessBolts: {
    type: String,
    required: false,
    },
    aftAccessGasket: {
    type: String,
    required: false,
    },
    aftAccessHinges: {
    type: String,
    required: false,
    },
    aftAccessBolts: {
    type: String,
    required: false,
    },
    vhfCover: {
    type: String,
    required: false,
    },
    gpsCover: {
    type: String,
    required: false,
    },
    smartcraftCover: {
    type: String,
    required: false,
    },
    mobiCover: {
    type: String,
    required: false,
    },
    vhfMicClip: {
    type: String,
    required: false,
    },
    whelenMicClip: {
    type: String,
    required: false,
    },
    handrails: {
    type: String,
    required: false,
    },
    handrailPushpins: {
    type: String,
    required: false,
    },
    consolePreservation: {
    type: String,
    required: false,
    },
    coxianCaulk: {
    type: String,
    required: false,
    },
    aftStowageCushion: {
    type: String,
    required: false,
    },
    aftStowageGasket: {
    type: String,
    required: false,
    },
    aftStowageHinges: {
    type: String,
    required: false,
    },
    aftStowageLatches: {
    type: String,
    required: false,
    },
    aftBilgeGasket: {
    type: String,
    required: false,
    },
    aftBilgeHinges: {
    type: String,
    required: false,
    },
    aftBilgeLatches: {
    type: String,
    required: false,
    },
    ringBracket: {
    type: String,
    required: false,
    },
    manualPump: {
    type: String,
    required: false,
    },
    manualPumpHandle: {
    type: String,
    required: false,
    },
    mobiPost: {
    type: String,
    required: false,
    },
    mobiPostPin: {
    type: String,
    required: false,
    },
    sternPost: {
    type: String,
    required: false,
    },
    sternPin: {
    type: String,
    required: false,
    },
    transomCap: {
    type: String,
    required: false,
    },
    transomCaulk: {
    type: String,
    required: false,
    },
    scuppers: {
    type: String,
    required: false,
    },
});

module.exports = deckSchema;