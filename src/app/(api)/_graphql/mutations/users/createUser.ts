import { gql } from '@apollo/client';

export const createUserMutation = gql`
  mutation Mutation($input: UserInput!) {
    createUser(input: $input) {
      id
      firstName
      lastName
      username
      email
      password
    }
  }
`;
