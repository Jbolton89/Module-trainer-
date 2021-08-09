import { gql } from '@apollo/client'; 

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        firstName
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
        firstName
        lastName
      }
    }
  }
`;

export const UPDATE_PROGRESS = gql` 
 mutation updateProgress($email: String!, $hasCompleted: Boolean,) {
  updateProgress(email: $email, hasCompleted: $hasCompleted) { 
    _id
    email
    hasCompleted { 
      _id
      title
      subject
      completed
    }
    
  }
}
  `

// export const UPDATE_HASCOMPLETED = gql` 
//   mutation updateHasCompleted ($email: String, $hasCompleted: Boolean)
//     updateHasCompleted(email: $email, hasCompleted: $hasCompleted) { 
//       _id
//       hasCompleted
//       user
//       lessons (titles: [Biology, Chemistry, Physics]) { 
//         _id
//         title
//       }
//     }`
