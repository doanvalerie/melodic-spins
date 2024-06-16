'use client';

import { createContext, useState } from 'react';

import SideBar from './_components/SideBar/SideBar';

export const SidebarContext = createContext(true);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSideBar, setshowSideBar] = useState(true);

  return (
    <div className="flex w-full flex-grow justify-center font-sans">
      <SideBar
        showSideBar={showSideBar}
        toggleSideBar={() => setshowSideBar(!showSideBar)}
      />
      <SidebarContext.Provider value={showSideBar}>
        {children}
      </SidebarContext.Provider>
    </div>
  );
}
