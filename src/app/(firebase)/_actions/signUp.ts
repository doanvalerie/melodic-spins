import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@firebase/_utils/config';

export default async function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  let result = null;
  let error = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    error = error;
  }

  return { result, error };
}
