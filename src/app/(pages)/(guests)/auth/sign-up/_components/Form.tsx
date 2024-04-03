'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import CreateUser from '@actions/users/mutations/CreateUsers';
import FormError from '@components/FormError/FormError';
import InputField from '@components/InputField/InputField';
import signUpData from '@data/auth/sign-up/signUpData.json';
import signUp from '@firebase/_actions/signUp';
import FormToJSON from '@utils/form/FormToJSON';

import { validateSignUpData } from '../_utils/validateSignUpData';
import AuthButtons from './AuthButtons';
import UserAgreement from './UserAgreement';

interface ErrorMessages {
  [key: string]: string[];
}

export default function Form() {
  const [errors, setErrors] = useState<ErrorMessages>({});
  const router = useRouter();

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userDataJSON = FormToJSON(formData);

    const validationErrors = await validateSignUpData(userDataJSON);
    if (validationErrors.invalid) {
      setErrors(validationErrors.message);
    } else {
      const { email, password } = userDataJSON;
      const { result } = await signUp({ email, password });

      if (result) {
        formData.append('id', result.user.uid);
        formData.delete('agree');

        await CreateUser(formData);
        router.push('/dashboard');
      }
    }
  }

  return (
    <form
      onSubmit={(e) => handleSignUp(e)}
      className="flex w-full flex-col gap-sm lg:w-1/2"
    >
      {signUpData.map((data) => (
        <div key={data.value} className="flex flex-col gap-xs">
          <InputField key={data.value} {...data} />
          {errors[data.value] && <FormError errors={errors[data.value]} />}
        </div>
      ))}
      <UserAgreement agreementError={errors['agree']} />
      <AuthButtons />
    </form>
  );
}
