'use server';

import { isEmailTakenQuery } from '@graphql/queries/users/isEmailTaken';
import { getClient } from '@utils/apollo/ApolloClient';

export async function QueryIsEmailTaken(email: string) {
  const { data } = await getClient().query({
    query: isEmailTakenQuery,
    variables: { email },
  });
  return data.isEmailTaken;
}
