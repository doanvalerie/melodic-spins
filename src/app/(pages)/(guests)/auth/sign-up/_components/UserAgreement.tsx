import FormError from '@components/FormError/FormError';
import Hyperlink from '@components/Hyperlink/Hyperlink';

export default function UserAgreement({
  agreementError,
}: {
  agreementError?: string[];
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-xs accent-primary">
        <input id="agree" type="checkbox" name="agree" value="agree" />
        <label>
          I agree to the{' '}
          <Hyperlink
            slug="/"
            value="Terms and Conditions"
            color="text-primary"
          />{' '}
          and{' '}
          <Hyperlink slug="/" value="Security Statement" color="text-primary" />
        </label>
      </div>
      {agreementError && <FormError errors={agreementError} />}
    </div>
  );
}
