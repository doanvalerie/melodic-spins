'use client';

import { withAuth } from '@contexts/AuthContext';

import SideBar from './_components/SideBar/SideBar';

function Dashboard() {
  return (
    <div className="flex w-full flex-grow justify-center font-sans">
      <SideBar />
      <div className="flex-grow bg-gray-100" />
    </div>
  );
}

export default withAuth(Dashboard);
