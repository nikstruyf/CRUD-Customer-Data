import React from "react";
import './customerform.css';
import { useNavigate } from 'react-router-dom';

export default function CustomerForm() {
  const navigate = useNavigate();

  const insert = (e: any) => {
    e.preventDefault();
    navigate('/customer');
  }

  return (
    <form onSubmit={insert}>
      <div className="form-header">
        insert customer information
      </div>
      <div className="label">
        <span>code</span>
        <input
          type="text"
          className="inputbox"
        />
      </div>
      <div className="label">
        <span>name</span>
        <input
          type="text"
          className="inputbox"
        />
      </div>
      <div className="label">
        <span>email</span>
        <input
          type="email"
          className="inputbox"
        />
      </div>
      <div className="label">
        <span>telephone number</span>
        <input
          type="tel"
          className="inputbox"
        />
      </div>
      <div className="label submit">
        <span />
        <input
          type="submit"
          value="insert"
          className="submit-button"
        />
      </div>
    </form>
  )
}