'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import accountLinks from '@data/dashboard/sidebar/accountLinks.json';
import overviewLinks from '@data/dashboard/sidebar/overviewLinks.json';
import logOut from '@firebase/_actions/logOut';

import iconRegistry from '../../_utils/iconRegistry';

export default function Menu() {
  return (
    <div className="flex flex-col gap-base">
      <OverviewSection />
      <AccountSection />
    </div>
  );
}

function SectionHeading({ heading }: { heading: string }) {
  return (
    <div className="text-xs font-semibold text-grey-medium">{heading}</div>
  );
}

function OverviewSection() {
  return (
    <div>
      <SectionHeading heading="OVERVIEW" />
      <div className="flex flex-col gap-xs p-xs">
        {overviewLinks.map((tab) => (
          <ExpandableMenuItem
            key={tab.label}
            label={tab.label}
            icon={tab.icon}
            links={tab.links}
          />
        ))}
      </div>
    </div>
  );
}

function AccountSection() {
  const router = useRouter();

  return (
    <div>
      <SectionHeading heading="ACCOUNT" />
      <div className="flex flex-col gap-xs p-xs">
        {accountLinks.map((tab) => (
          <MenuItem key={tab.label} label={tab.label} icon={tab.icon} />
        ))}
        <MenuItem
          label="Log Out"
          icon={'TbLogout'}
          onClick={() => {
            logOut();
            router.push('/');
          }}
        />
      </div>
    </div>
  );
}

function ExpandableMenuItem({
  label,
  icon,
  links,
}: {
  label: string;
  icon: string;
  links: Array<{ name: string; slug: string }>;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div
        className="flex cursor-pointer items-center gap-xs font-medium"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="flex items-center gap-xs text-grey-light">
          <IoIosArrowForward />
          {iconRegistry[icon]}
        </span>
        {label}
      </div>
      <div
        className={`flex gap-xs pl-sm duration-500 ease-out ${isExpanded ? 'mt-xs h-full' : 'h-0 -translate-y-full opacity-0'}`}
      >
        <div className="border border-b-0 border-r-0 border-t-0 border-gray-border pl-xs" />
        <div className="flex flex-col gap-xs">
          {links.map((link) => (
            <Link key={link.slug} href={link.slug}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuItem({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="flex cursor-pointer items-center gap-xs font-medium"
      onClick={onClick}
    >
      <span className="text-grey-light">{iconRegistry[icon]}</span>
      {label}
    </div>
  );
}
