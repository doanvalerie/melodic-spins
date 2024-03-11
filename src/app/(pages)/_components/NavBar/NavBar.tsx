import AuthButtons from './AuthButtons';
import Links from './Links';
import Logo from './Logo';

export default function NavBar() {
  return (
    <div className="flex h-navbar w-full items-center justify-between gap-base bg-stone px-base py-sm">
      <Logo />
      <Links />
      <AuthButtons />
    </div>
  );
}
