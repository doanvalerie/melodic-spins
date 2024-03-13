import InputField from '@components/InputField/InputField';
import signInData from '@data/auth/sign-in/signInData.json';

import AuthButtons from './AuthButtons';
import ResetCredentials from './ResetCredentials';

export default function Form() {
  return (
    <form className="flex w-full flex-col gap-sm lg:w-1/2">
      {signInData.map((data) => (
        <InputField key={data.value} {...data} />
      ))}
      <ResetCredentials />
      <AuthButtons />
    </form>
  );
}
