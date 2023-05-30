import React from "react";
import './customeroptionbar.css';
import { useNavigate } from 'react-router-dom';

export default function CustomerOptionBar() {
  const navigate = useNavigate();

  return (
    <div className="option-bar">
      <div>
        <button
          type="button"
          className="button-add"
          onClick={() => { navigate('/customer/manage?form-type=insert'); }}
        >
          add
        </button>
      </div>
    </div>
  )
}