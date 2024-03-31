import { gql } from '@apollo/client';

export const isEmailTakenQuery = gql`
  query Query($email: String!) {
    isEmailTaken(email: $email)
  }
`;
