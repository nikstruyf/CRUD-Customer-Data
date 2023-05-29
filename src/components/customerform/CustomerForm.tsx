import React, { useState } from "react";
import './customerform.css';
import { useNavigate, useSearchParams  } from 'react-router-dom';
import { CustomerData } from "../../interface";

export default function CustomerForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [customerData, setCustomerData] = useState<CustomerData>();
  const [code, setCode] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [tel, setTel] = useState<string>('');

  const insert = (e: any) => {
    e.preventDefault();
    setCustomerData({
      code,
      name,
      email,
      tel,
      status: 'inactive'
    });
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
          value={code}
          onChange={(e) => { setCode(e.target.value) }}
        />
      </div>
      <div className="label">
        <span>name</span>
        <input
          type="text"
          className="inputbox"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        />
      </div>
      <div className="label">
        <span>email</span>
        <input
          type="email"
          className="inputbox"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
      </div>
      <div className="label">
        <span>telephone number</span>
        <input
          type="tel"
          className="inputbox"
          value={tel}
          onChange={(e) => { setTel(e.target.value) }}
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