import { gql } from '@apollo/client'; 

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        fullName
      }
    }
  }
`;

export const NEW_USER = gql`
  mutation newUser($firstName: String!, $email: String!, $password: String!) {
    newUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        email
        password
        fullName
      }
    }
  }
`;

export const UPDATE_PROGRESS = gql` 
 mutation updateProgress($email: String!, $hasCompleted: Boolean) {
  updateProgress(email: $email, hasCompleted: $hasCompleted) { 
    _id
    hasCompleted
    user
    lessons (titles: [biology, chemistry, physics]) { 
      id
      title
    }
    
  }
}
  `
