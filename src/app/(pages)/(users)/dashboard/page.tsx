'use client';

import { useContext } from 'react';

import { withAuth } from '@contexts/AuthContext';

import { SidebarContext } from './layout';

function Dashboard() {
  const showSideBar = useContext(SidebarContext);
  const menuIconSize = 20;

  return (
    <div
      className={`bg-background-light flex-grow p-base ${showSideBar && 'pl-[calc(theme(spacing.base)+theme(spacing.sidebar))]'}`}
    >
      <h3
        className={`${!showSideBar && `pl-[calc(${menuIconSize}px+theme(spacing.base))]`}`}
      >
        Dashboard
      </h3>
      <div className="py-sm">Test</div>
    </div>
  );
}

export default withAuth(Dashboard);
