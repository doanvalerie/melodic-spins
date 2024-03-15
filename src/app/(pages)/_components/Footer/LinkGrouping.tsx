import Link from 'next/link';

interface Link {
  name: string;
  slug: string;
}

export default function LinkGrouping({
  name,
  links,
}: {
  name: string;
  links: Link[];
}) {
  return (
    <div className="flex flex-col gap-xs">
      <h3>{name}</h3>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.slug} className="font-medium">
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
