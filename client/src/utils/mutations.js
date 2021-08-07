import { gql } from '@apollo/client'; 

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        fullName
      }
    }
  }
`;

export const NEW_USER = gql`
  mutation NewUser($name: String!, $email: String!, $password: String!) {
    newUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        fullName
      }
    }
  }
`;