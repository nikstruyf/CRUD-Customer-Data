import React, { useState, useEffect } from "react";
import './customerform.css';
import { useNavigate, useSearchParams  } from 'react-router-dom';
import { CustomerData } from "../../interface";
import { useSelector, useDispatch } from "react-redux";
import { customerArrayData, insertCustomer, updateCustomer, deleteCustomer } from "../../reducers/customer";
import { confirmState, askConfirm, resetConfirm } from "../../reducers/confirmstate";

export default function CustomerForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [code, setCode] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [tel, setTel] = useState<string>('');

  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [validMessage, setValidMessage] = useState<boolean>(false);

  const confirm = useSelector(confirmState);

  const data = useSelector(customerArrayData);
  let index = -1;
  if (searchParams.get('form-type') === 'update') {
    index = data.findIndex((data: CustomerData) => data.id === searchParams.get('id'));
  }

  function checkFillAll() {
    if (
      code === ''
      || name === ''
      || email === ''
      || tel === ''
    ) {
      return false;
    } else {
      return true;
    }
  }

  const formSubmit = (e: any) => {
    e.preventDefault();
    if (checkFillAll()) {
      setValidMessage(false);
      dispatch(askConfirm({
        message: searchParams.get('form-type') === 'update'
          ? 'continue update?'
          : 'continue insert?',
        status: '',
        display: true
      }));
    } else {
      setValidMessage(true);
    }
  } 

  const formReset = (e: any) => {
    e.preventDefault();
    setIsDelete(true);
    dispatch(askConfirm({
      message: 'comfirm delete?',
      status: '',
      display: true
    }));
  }

  function insert() {
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

  function update() {
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

  function deleteCus() {
    dispatch(deleteCustomer(index));
    setCode('');
    setName('');
    setEmail('');
    setTel('');
    navigate('/customer');
  }

  useEffect(() => {
    if (searchParams.get('form-type') === 'update') {
      setCode(data[index].code);
      setName(data[index].name);
      setEmail(data[index].email);
      setTel(data[index].tel);
    }
  }, [])

  useEffect(() => {
    if (confirm.status === 'confirm') {
      if (searchParams.get('form-type') === 'update' && !isDelete) {
        update();
      } else if (searchParams.get('form-type') === 'insert' && !isDelete) {
        insert();
      } else {
        deleteCus();
        setIsDelete(false);
      }
    }
    dispatch(resetConfirm());
  }, [confirm.status]);

  return (
    <form
      onSubmit={formSubmit}
      onReset={formReset}
    >
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
      <div className="label">
        <span />
        <div className={`valid-message ${validMessage ? '' : 'hide'}`}>
          please, fill all customer information
        </div>
      </div>
      <div className="label submit">
        <span />
        <input
          type="submit"
          value={searchParams.get('form-type') === 'update' ? "update" : "insert"}
          className="submit-button"
        />
        { searchParams.get('form-type') === 'update' &&
          <input
            type="reset"
            className="delete-button"
            value="delete"
          />
        }
        
      </div>
    </form>
  )
}