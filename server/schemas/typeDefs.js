const { gql } = require('apollo-server-express');

const typeDefs = gql`


type User {
    _id: ID
    firstName: String
    lastName: String
    fullName: String
    email: String
    password: String
    hasCompleted: [Lesson]! {
      title: [Lesson]
    }
  }

type Lesson { 
  _id: ID 
  title: String!
  subject: String
}

type Auth { 
    token: ID!
    user: User
  }
  
type Query {
    users: [User]
    user(name: String!): User
    me: User
    lesson(name: String!): Lesson
    lessons: [Lesson]
  }

type Mutation { 
    newUser(firstName: String!, lastName: String!, fullName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    newLesson(title: String!, subject: String):Lesson
    updateProgress(lessons: [ID!], hasCompleted: Boolean!): User
  }
`

  module.exports = typeDefs; 







