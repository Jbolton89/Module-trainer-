const { gql } = require('apollo-server-express');

const typeDefs = gql`


type User {
    _id: ID
    name: String
    email: String
    password: String
    lessons: [lesson]!
  }

type Auth { 
    token: ID!
    user: User
  }
  
type Query {
    users: [User]
    user(name: String!): User
    me: User
  }

type Mutation { 
    newUser(firstName: String!, lastName: String!, email: String!, password: String!)
  }
`

  module.exports = typeDefs; 



