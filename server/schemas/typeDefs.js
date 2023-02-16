const { gql } = require('apollo-server-express');

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
  type Assessment {
    hullNumber: String!
    hull: [Hull]
    sponson: [Sponson]
    propulsion: [Propulsion]
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

  input assessmentBody {
    hullNumber: String!
    hull: [hullBody]
    sponson: [sponsonBody]
    propulsion: [propulsionBody]
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
  }
`;

module.exports = typeDefs;