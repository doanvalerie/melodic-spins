'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import navLinksIndex from '@data/index/navLinksIndex.json';

export default function Links() {
  const [activeSlug, setActiveSlug] = useState('Home');

  return (
    <div className="hidden gap-med text-base font-semibold text-grey-light lg:flex">
      {navLinksIndex.map((link) => (
        <Link key={link.name} href="/">
          <div
            className={clsx({
              'border-b-2 border-primary font-bold text-dark hover:text-dark':
                activeSlug === link.name,
              'hover:text-grey': activeSlug !== link.name,
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
