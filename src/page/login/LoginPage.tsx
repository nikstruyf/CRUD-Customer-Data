import React from "react";
import './loginpage.css';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const login = (e: any) => {
    e.preventDefault();
    navigate('/customer');
  }

  return (
    <div className="login page-bg">
      <div className="login page-container">
        <form onSubmit={login}>
          <div className="login-label">
            <span>username</span>
            <input
              className="inputbox"
              type="text"
              placeholder="enter username"
            />
          </div>
          <input
            className="login-button"
            type="submit"
            value="login"
          />
        </form>
      </div>
    </div>
  ) 
}