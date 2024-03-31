import { signOut } from 'firebase/auth';

import { auth } from '@firebase/_utils/config';

export default async function logOut() {
  let result = null;
  let error = null;

  try {
    result = signOut(auth);
  } catch (error) {
    error = error;
  }

  return { result, error };
}
