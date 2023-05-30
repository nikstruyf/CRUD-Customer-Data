import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './topnav.css';
import { useSelector, useDispatch } from "react-redux";
import { doLogout, usernameDisplay } from "../../reducers/username";

import LogoutIcon from '@mui/icons-material/Logout';

export default function TopNav() {
  const username = useSelector(usernameDisplay);
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  function logout() {
    dispatch(doLogout());
    nevigate('/');
  }

  return (
    <div className="topnav">
      <Link className="topnav-link" to="/customer">customer</Link>
      <div className="topnav-user">
        <span className="username">{username}</span>
        <button
          className="button-logout"
          onClick={() => { logout(); }}
        >
          <LogoutIcon />
        </button>
      </div>
    </div>
  )
}