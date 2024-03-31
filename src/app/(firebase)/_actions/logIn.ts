import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@firebase/_utils/config';

export default async function logIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  let result = null;
  let error = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    error = error;
  }

  return { result, error };
}
