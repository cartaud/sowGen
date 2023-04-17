const { gql } = require('apollo-server-express');
//finish adding all parts for engine type and input. Then add the list of items to schema then to front end.
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
  }
  type Hull {
    hullNumber: String
    fiberglass: String
    gelCoat: String
    paint: String
    preservation: String
  }
  type Sponson {
    hullNumber: String
    tube: String
    mbcs: String
    retainers: String
    transomStraps: String
    sponsonGasket: String
  }
  type Propulsion {
    hullNumber: String
    outdrive: String 
    outdrivePaint: String 
    propeller: String 
    tillerBracket: String
    trimHoses: String 
    trimCylinders: String 
    outdriveZincs: String
    outdriveGrounding: String
    bellows: String
    outdriveReservoir: String
    interiorTrimHose: String
    trimPump: String
    trimSolenoids: String
    trimBracket: String
    driveshaft: String
    aftHoop: String
    aftBearing: String
    forwardHoop: String
    forwardBearing: String
    shiftCables: String
    throttleCable: String
    cableBracket: String
    controlHead: String
    throttlePlacard: String
  }
  type Piping {
    hullNumber: String
    seacock: String 
    seacockHose: String
    strainer: String 
    strainerHose: String
    fuelHoses: String 
    fuelStripping: String 
    flocs: String 
    racorHousing: String
    racorFilter: String
    fuelTank: String
    exhaustHose: String
  }
  type Engine {
    hullNumber: String
    enginePaint: String
    engineOil: String
    oilFilter: String
    oilHoses: String
    fuelFilter: String
    fuelHoses: String
    coolant: String
    coolantCap: String
    waterPump: String
    afterCooler: String
    heatExchanger: String
    waterHoses: String
    zincs: String
    starter: String
    alternator: String
    ecm: String
    motorMounts: String
    mountingBrackets: String
    turbo: String
    turboOilLine: String
    turboCoolantLine: String
    waterBelt: String
    driveBelt: String
    beltGuard: String
  }
  type Electrical {
    hullNumber: String
    navLights: String
    anchorLight: String
    horn: String
    bilgePump: String
    pumpLed: String
    floatSwitch: String
    controlSwitches: String
    trimSwitches: String
    trimGauge: String
    trimLed: String
    trimPump: String
    chargingBreaker: String
    preHeaterBreaker: String
    polarityLed: String
    vhfRadio: String
    vhfAntenna: String
    gps: String
    smartcraft: String
    whelenControl: String
    whelenMic: String
    whelenSpeaker: String
    mobiDisplay: String
    mobiPower: String
    mobiData: String
    mobiAntenna: String
    strobe: String
    receptacles: String
    barrelSwitch: String
    batteries: String
    batteryCables: String
    batteryCharger: String
    interiorBreakers: String
  }
  type Assessment {
    hullNumber: String!
    hull: [Hull]
    sponson: [Sponson]
    propulsion: [Propulsion]
    piping: [Piping]
    engine: [Engine]
  }
  type Auth {
    token: ID
    user: User
  }

  input hullBody {
    hullNumber: String
    fiberglass: String
    gelCoat: String
    paint: String
    preservation: String
  }

  input sponsonBody {
    hullNumber: String
    tube: String
    mbcs: String
    retainers: String
    transomStraps: String
    sponsonGasket: String
  }

  input propulsionBody {
    hullNumber: String
    outdrive: String 
    outdrivePaint: String 
    propeller: String 
    tillerBracket: String
    trimHoses: String 
    trimCylinders: String 
    outdriveZincs: String
    outdriveGrounding: String
    bellows: String
    outdriveReservoir: String
    interiorTrimHose: String
    trimPump: String
    trimSolenoids: String
    trimBracket: String
    driveshaft: String
    aftHoop: String
    aftBearing: String
    forwardHoop: String
    forwardBearing: String
    shiftCables: String
    throttleCable: String
    cableBracket: String
    controlHead: String
    throttlePlacard: String
  }

  input pipingBody {
    hullNumber: String
    seacock: String 
    seacockHose: String
    strainer: String 
    strainerHose: String
    fuelHoses: String 
    fuelStripping: String 
    flocs: String 
    racorHousing: String
    racorFilter: String
    fuelTank: String
    exhaustHose: String
  }

  input engineBody {
    hullNumber: String
    enginePaint: String
    engineOil: String
    oilFilter: String
    oilHoses: String
    fuelFilter: String
    fuelHoses: String
    coolant: String
    coolantCap: String
    waterPump: String
    afterCooler: String
    heatExchanger: String
    waterHoses: String
    zincs: String
    starter: String
    alternator: String
    ecm: String
    motorMounts: String
    mountingBrackets: String
    turbo: String
    turboOilLine: String
    turboCoolantLine: String
    waterBelt: String
    driveBelt: String
    beltGuard: String
  }

  input electricalBody {
    hullNumber: String
    navLights: String
    anchorLight: String
    horn: String
    bilgePump: String
    pumpLed: String
    floatSwitch: String
    controlSwitches: String
    trimSwitches: String
    trimGauge: String
    trimLed: String
    trimPump: String
    chargingBreaker: String
    preHeaterBreaker: String
    polarityLed: String
    vhfRadio: String
    vhfAntenna: String
    gps: String
    smartcraft: String
    whelenControl: String
    whelenMic: String
    whelenSpeaker: String
    mobiDisplay: String
    mobiPower: String
    mobiData: String
    mobiAntenna: String
    strobe: String
    receptacles: String
    barrelSwitch: String
    batteries: String
    batteryCables: String
    batteryCharger: String
    interiorBreakers: String
  }

  input assessmentBody {
    hullNumber: String!
    hull: [hullBody]
    sponson: [sponsonBody]
    propulsion: [propulsionBody]
    engine: [engineBody]
    electrical: [electricalBody]
  }

  type Query {
    me: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    createAssessment(input: assessmentBody!): Assessment
    addHull(input: hullBody!): Hull
    addSponson(input: sponsonBody!): Sponson
    addPropulsion(input: propulsionBody!): Propulsion
    addPiping(input: pipingBody!): Piping
    addEngine(input: engineBody!): Engine
    addElectrical(input: electricalBody!): Electrical
  }
`;

module.exports = typeDefs;