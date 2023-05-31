import React from "react";
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { askConfirm } from "../../reducers/confirmstate";

import TopNav from "../topnav/TopNav";
import ConfirmPopup from "../confirmpopup/ConfirmPopup";

export default function Layout() {
  return (
    <div>
      <ConfirmPopup />
      <TopNav />
      <div>
        <Outlet />
      </div>
    </div>
  )
}