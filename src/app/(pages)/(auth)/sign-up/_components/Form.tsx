import InputField from '@components/InputField/InputField';
import signUpData from '@data/auth/sign-up/signUpData.json';

import AuthButtons from './AuthButtons';
import UserAgreement from './UserAgreement';

export default function Form() {
  return (
    <form className="flex w-full flex-col gap-sm lg:w-1/2">
      {signUpData.map((data) => (
        <InputField key={data.value} {...data} />
      ))}
      <UserAgreement />
      <AuthButtons />
    </form>
  );
}
