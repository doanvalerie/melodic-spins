import AuthButtons from './AuthButtons';
import Links from './Links';
import Logo from './Logo';

export default function NavBar() {
  return (
    <div className="top-0 flex w-full items-center justify-between gap-base bg-stone-100 px-base py-sm">
      <Logo />
      <Links />
      <AuthButtons />
    </div>
  );
}
