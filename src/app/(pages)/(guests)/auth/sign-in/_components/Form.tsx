'use client';

import { useRouter } from 'next/navigation';

import InputField from '@components/InputField/InputField';
import signInData from '@data/auth/sign-in/signInData.json';
import logIn from '@firebase/_actions/logIn';
import FormToJSON from '@utils/form/FormToJSON';

import AuthButtons from './AuthButtons';
import ResetCredentials from './ResetCredentials';

export default function Form() {
  const router = useRouter();

  async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userDataJSON = FormToJSON(formData);

    const { email, password } = userDataJSON;
    const { result } = await logIn({ email, password });

    if (result) {
      router.push('/dashboard');
    } else {
      alert('Wrong credentials'); // temp
    }
  }

  return (
    <form
      onSubmit={(e) => handleSignIn(e)}
      className="flex w-full flex-col gap-sm lg:w-1/2"
    >
      {signInData.map((data) => (
        <InputField key={data.value} {...data} />
      ))}
      <ResetCredentials />
      <AuthButtons />
    </form>
  );
}
