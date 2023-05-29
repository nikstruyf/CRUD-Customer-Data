import React, { useState, useEffect } from "react";
import './customerform.css';
import { useNavigate, useSearchParams  } from 'react-router-dom';
import { CustomerData } from "../../interface";
import { useSelector, useDispatch } from "react-redux";
import { customerArrayData, insertCustomer, updateCustomer } from "../../reducers/customer";

export default function CustomerForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [code, setCode] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [tel, setTel] = useState<string>('');

  const data = useSelector(customerArrayData);
  let index = -1;

  const insert = (e: any) => {
    e.preventDefault();
    dispatch(insertCustomer({
      id: code+tel.slice(-4),
      code,
      name,
      email,
      tel,
      status: 'inactive'
    }));
    setCode('');
    setName('');
    setEmail('');
    setTel('');
    navigate('/customer');
  }

  const update = (e: any) => {
    e.preventDefault();
    dispatch(updateCustomer({
      data: {
      id: code+tel.slice(-4),
      code,
      name,
      email,
      tel,
      status: 'inactive'
      },
      index
    }));
    setCode('');
    setName('');
    setEmail('');
    setTel('');
    navigate('/customer');
  }

  useEffect(() => {
    if (searchParams.get('form-type') === 'update') {
      index = data.findIndex((data: CustomerData) => data.id === searchParams.get('id'));
      setCode(data[index].code);
      setName(data[index].name);
      setEmail(data[index].email);
      setTel(data[index].tel);
    }
  }, [])

  return (
    <form onSubmit={searchParams.get('form-type') === 'update' ? update : insert}>
      <div className="form-header">
        insert customer information
      </div>
      <div className="label">
        <span>code</span>
        <input
          type="text"
          className="inputbox"
          value={code || ''}
          onChange={(e) => { setCode(e.target.value) }}
        />
      </div>
      <div className="label">
        <span>name</span>
        <input
          type="text"
          className="inputbox"
          value={name || ''}
          onChange={(e) => { setName(e.target.value) }}
        />
      </div>
      <div className="label">
        <span>email</span>
        <input
          type="email"
          className="inputbox"
          value={email || ''}
          onChange={(e) => { setEmail(e.target.value) }}
        />
      </div>
      <div className="label">
        <span>telephone number</span>
        <input
          type="tel"
          className="inputbox"
          value={tel || ''}
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