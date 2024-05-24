import { TbVinyl } from 'react-icons/tb';

export default function BrandLogo({ fontSize }: { fontSize?: string }) {
  return (
    <div
      className={`${fontSize} flex items-center gap-xs font-rubik text-2xl font-medium`}
    >
      <TbVinyl />
      Melodic Spins.
    </div>
  );
}
