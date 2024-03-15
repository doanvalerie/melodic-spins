import Link from 'next/link';

export default function Hyperlink({
  slug,
  value,
  color,
}: {
  slug: string;
  value: string;
  color?: string;
}) {
  return (
    <Link href={slug}>
      <div
        className={`${color ? color : 'text-dark'} inline-block font-semibold`}
      >
        {value}
      </div>
    </Link>
  );
}
