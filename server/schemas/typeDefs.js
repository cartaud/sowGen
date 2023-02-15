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
  type Assessment {
    hullNumber: String!
    hull: [Hull]
    sponson: [Sponson]
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

  input assessmentBody {
    hullNumber: String!
    hull: [hullBody]
    sponson: [sponsonBody]
  }

  type Query {
    me: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    createAssessment(input: assessmentBody!): Assessment
    addHull(input: hullBody!): Hull
    addSponson(input: sponsonBody!): Sponson
  }
`;

module.exports = typeDefs;