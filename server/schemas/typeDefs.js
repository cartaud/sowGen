const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
  }
  type Hull {
    fiberglass: String
    gelCoat: String
    paint: String
    preservation: String
  }
  type Assessment {
    hullNumber: String!
    hull: [Hull]
  }
  type Auth {
    token: ID
    user: User
  }

  input hullBody {
    fiberglass: String
    gelCoat: String
    paint: String
    preservation: String
  }

  input assessmentBody {
    hullNumber: String!
    hull: [hullBody]
  }

  type Query {
    me: User
  }
  type Mutation {
    login(username: String!, password: String!): Auth
    createAssessment(input: assessmentBody!): Assessment
    addHull(input: hullBody!): Assessment
  }
`;

module.exports = typeDefs;