'use server';

import { createUserMutation } from '@graphql/mutations/users/createUser';
import { getClient } from '@utils/apollo/ApolloClient';
import FormToJSON from '@utils/form/FormToJSON';

export default async function CreateUser(formData: FormData) {
  const userData = FormToJSON(formData);
  await getClient().mutate({
    mutation: createUserMutation,
    variables: {
      input: userData,
    },
  });
}
