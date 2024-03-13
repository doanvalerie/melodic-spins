import Hyperlink from '@components/Hyperlink/Hyperlink';

export default function ResetCredentials() {
  return (
    <Hyperlink
      slug="/auth/reset"
      value="Forgot password or username?"
      color="text-grey-light"
    />
  );
}
