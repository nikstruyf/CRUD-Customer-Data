import React from "react";
import { Outlet } from 'react-router-dom';

import TopNav from "../topnav/TopNav";

export default function Layout() {
  return (
    <div>
      <TopNav />
      <div>
        <Outlet />
      </div>
    </div>
  )
}