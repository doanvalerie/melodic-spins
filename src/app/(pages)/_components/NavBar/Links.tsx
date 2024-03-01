'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import navLinksIndex from '@data/navLinksIndex.json';

export default function Links() {
  const [activeSlug, setActiveSlug] = useState('Home');

  return (
    <div className="hidden gap-med text-base font-semibold text-neutral-400 lg:flex">
      {navLinksIndex.map((link) => (
        <Link key={link.name} href="/">
          <div
            className={clsx({
              'text-dark border-primary-color hover:text-dark border-b-2 font-bold':
                activeSlug === link.name,
              'hover:text-neutral-500': activeSlug !== link.name,
            })}
            onClick={() => setActiveSlug(link.name)}
          >
            {link.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
