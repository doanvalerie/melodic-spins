import Hyperlink from '@components/Hyperlink/Hyperlink';

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-sm">
      <button type="button" className="w-min bg-primary text-white">
        Register
      </button>
      <div>
        Have an account? <Hyperlink slug="/auth/sign-in" value="Sign In." />
      </div>
    </div>
  );
}
