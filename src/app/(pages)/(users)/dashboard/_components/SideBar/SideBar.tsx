'use client';

import { useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import { MdClose } from 'react-icons/md';

import BrandLogo from '@components/BrandLogo/BrandLogo';

import Menu from './Menu';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';

export default function SideBar() {
  const [showSidebar, setShowSidebar] = useState(true);
  const menuIconSize = 16;

  return (
    <div>
      <LuMenu
        className={`fixed left-6 top-6 cursor-pointer duration-300 ease-out ${showSidebar ? '-translate-x-[200%]' : 'delay-300'}`}
        onClick={() => setShowSidebar(!showSidebar)}
        size={20}
      />
      <div
        className={`fixed left-0 top-0 flex h-full flex-col justify-between bg-white duration-300 ease-in-out ${!showSidebar && '-translate-x-full'}`}
      >
        <div className="flex flex-col gap-base p-base">
          <div className="flex items-center gap-med">
            <BrandLogo fontSize="text-xl" />
            <MdClose
              className="cursor-pointer"
              size={menuIconSize}
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </div>
          <SearchBar />
          <Menu />
        </div>
        <div>
          <div className="bg-gray-border h-px w-full" />
          <UserInfo />
        </div>
      </div>
    </div>
  );
}
