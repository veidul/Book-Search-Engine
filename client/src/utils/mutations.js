import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// need to ask for help with this one
export const SAVE_BOOK = gql`
  mutation saveBook($_id: ID!) {
    saveBook(_id: $_id) {
      _id
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
// ask if you can delete the unecessary parts
export const REMOVE_BOOK = gql`
  mutation removeBook($_id: ID!, $id: String!) {
    removeBook(_id: $_id, bookId: $id) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
