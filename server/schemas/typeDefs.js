const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        prevBuilds: [Builder]
    }

    type Builder {
        temp: String!
        size: String!
        planted: Boolean!
        centrepiece: String
        fishAdditions: [ String ]
        buildBy: ID!
    }

    type Fish {
        name: String!
        primaryFish: Boolean
        compatible: [ String ]
        temp: String
        tips: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        fish: Fish
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        newBuild(temp: String!, size: String!, planted: Boolean!, centrepiece: String, fishAdditions: [ String ]): Builder
    }
`

module.exports = typeDefs;