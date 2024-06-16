'use client';

import { LuMenu } from 'react-icons/lu';
import { MdClose } from 'react-icons/md';

import BrandLogo from '@components/BrandLogo/BrandLogo';

import Menu from './Menu';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';

export default function SideBar({
  showSideBar,
  toggleSideBar,
}: {
  showSideBar: boolean;
  toggleSideBar: () => void;
}) {
  const closeIconSize = 16;
  const menuIconSize = 20;

  return (
    <div>
      <LuMenu
        className={`fixed left-base top-base mt-1 cursor-pointer duration-300 ease-out ${showSideBar ? '-translate-x-[200%]' : 'delay-300'}`}
        onClick={toggleSideBar}
        size={menuIconSize}
      />

      <div
        className={`fixed left-0 top-0 flex h-full flex-col justify-between bg-white duration-300 ease-in-out ${!showSideBar && '-translate-x-full'}`}
      >
        <div className="flex flex-col gap-base p-base">
          <div className="flex items-center gap-med">
            <BrandLogo fontSize="text-xl" />
            <MdClose
              className="cursor-pointer"
              size={closeIconSize}
              onClick={toggleSideBar}
            />
          </div>
          <SearchBar />
          <Menu />
        </div>
        <div>
          <div className="h-px w-full bg-gray-border" />
          <UserInfo />
        </div>
      </div>
    </div>
  );
}
