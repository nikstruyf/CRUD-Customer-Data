import React, { useState } from "react";
import './loginpage.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { doLogin } from "../../reducers/username";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>('')

  const login = (e: any) => {
    e.preventDefault();
    dispatch(doLogin(username || ''));
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
              onChange={(e) => { setUsername(e.target.value); }}
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