import Link from 'next/link';

export default function AuthButtons() {
  return (
    <div className="flex gap-xs">
      <SignInButton />
      <SignUpButton />
    </div>
  );
}

function SignInButton() {
  return (
    <Link href="/sign-in">
      <button className="hover:font-bold">Sign In</button>
    </Link>
  );
}

function SignUpButton() {
  return (
    <Link href="/sign-up">
      <button className="border-primary-color rounded-sm border text-rose-500 hover:bg-red-100 hover:font-bold">
        Sign Up
      </button>
    </Link>
  );
}
