import Link from 'next/link';
import { TbVinyl } from 'react-icons/tb';

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-xs font-rubik text-2xl font-medium">
        <TbVinyl />
        Melodic Spins.
      </div>
    </Link>
  );
}
