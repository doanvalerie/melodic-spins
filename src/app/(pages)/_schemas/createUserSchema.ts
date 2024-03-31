import { z } from 'zod';

import { QueryIsEmailTaken } from '@actions/users/queries/QueryIsEmailTaken';

export const createUserSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required.' }),
  lastName: z.string().min(1, { message: 'Last name is required.' }),
  username: z.string().min(1, { message: 'Username is required.' }),
  email: z
    .string()
    .email({ message: 'Valid email address is required.' })
    .refine(
      async (value) => {
        const isEmailTaken = await QueryIsEmailTaken(value);
        return !isEmailTaken;
      },
      (value) => ({ message: `${value} is already in use.` })
    ),
  password: z
    .string()
    .min(6, { message: 'Password must consist of at least 6 characters.' }),
});
