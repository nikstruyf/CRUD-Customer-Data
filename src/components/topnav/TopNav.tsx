import React from "react";
import { Link } from "react-router-dom";
import './topnav.css';

export default function TopNav() {
  return (
    <div className="topnav">
      <Link className="topnav-link" to="/customer">customer</Link>
      <div className="topnav-user">
        <span>username</span>
        <Link className="topnav-link-logout" to="/">logout</Link>
      </div>
    </div>
  )
}