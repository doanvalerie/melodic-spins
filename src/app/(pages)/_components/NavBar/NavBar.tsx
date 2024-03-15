import Link from 'next/link';

import BrandLogo from '@components/BrandLogo/BrandLogo';

import AuthButtons from './AuthButtons';
import Links from './Links';

export default function NavBar() {
  return (
    <div className="flex h-navbar w-full items-center justify-between gap-base bg-stone px-base py-sm shadow-md">
      <Link href="/">
        <BrandLogo />
      </Link>
      <Links />
      <AuthButtons />
    </div>
  );
}
