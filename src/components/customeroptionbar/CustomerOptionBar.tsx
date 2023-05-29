import React from "react";
import './customeroptionbar.css';
import { useNavigate } from 'react-router-dom';

export default function CustomerOptionBar() {
  const navigate = useNavigate();

  return (
    <div className="option-bar">
      <div className="button-group">
        <button
          type="button"
          className="button-set-status"
        >
          active
        </button>
        <button
          type="button"
          className="button-set-status"
        >
          inactive
        </button>
        <span className="vertical-line" />
        <button
          type="button"
          className="button-delete"
        >
          delete
        </button>
      </div>
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