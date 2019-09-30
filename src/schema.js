const { gql } = require('apollo-server-express');
const typeDefs = gql`

type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    measurements: [Measurement!]!
}

type Measurement {
    id: Int!
    weight: Float!
    user: User!
    createdAt: String
}

type Query {
    user(id: Int!): User
    users: [User!]!
    getMeasurement(id: Int!): Measurement
    getMeasurements:[Measurement!]!
}
type Mutation {
    createUser(firstName: String!,lastName: String!, email: String!, password: String!): User!
    createMeasurement( userId: Int!, weight: Float!): Measurement!
    deleteMeasurement( id: Int! ): Int!
    updateMeasurement( id: Int!, weight: Float!): [Int!]!
}`;
module.exports = typeDefs;