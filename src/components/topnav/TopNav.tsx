import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './topnav.css';
import { useSelector, useDispatch } from "react-redux";
import { doLogout, usernameDisplay } from "../../reducers/username";
import { confirmState, askConfirm, resetConfirm } from "../../reducers/confirmstate";

import LogoutIcon from '@mui/icons-material/Logout';

export default function TopNav() {
  const username = useSelector(usernameDisplay);
  const confirm = useSelector(confirmState)
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const [isLogout, setIsLogout] = useState<boolean>(false);

  function logout() {
    dispatch(askConfirm({
      message: 'logout?',
      status: '',
      display: true
    }));
  }

  useEffect(() => {
    if (confirm.status === 'confirm' && isLogout) {
      dispatch(doLogout());
      nevigate('/');
    }
    setIsLogout(false);
    dispatch(resetConfirm());
  }, [confirm.status]);

  return (
    <div className="topnav">
      <Link className="topnav-link" to="/customer">customer</Link>
      <div className="topnav-user">
        <span className="username">{username}</span>
        <button
          className="button-logout"
          onClick={() => {
            setIsLogout(true);
            logout();
          }}
        >
          <LogoutIcon />
        </button>
      </div>
    </div>
  )
}