import { gql } from '@apollo/client';

export const userQuery = gql`
  query ExampleQuery($id: ID!) {
    user(id: $id) {
      firstName
      lastName
      username
    }
  }
`;

interface User {
  firstName: string;
  lastName: string;
  username: string;
}

export interface UserQueryData {
  user: User;
}
