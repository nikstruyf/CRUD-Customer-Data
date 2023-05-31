import React from "react";
import './confirmpopup.css';
import { useSelector, useDispatch } from "react-redux";
import { confirmState, doConfirm, doCancel } from "../../reducers/confirmstate";

export default function ConfirmPopup() {
  const dispatch = useDispatch();
  const state = useSelector(confirmState);

  return (
    <div className={`confirm-bg ${state.display ? '' : 'hide'}`}>
      <div className={`confirm-container ${state.display ? '' : 'hide'}`}>
        <div className="confirm-message">
          {state.message}
        </div>
        <div className="confirm-button-group">
          <button
            type="button"
            className="button-confirm"
            onClick={() => { dispatch(doConfirm()); }}
          >
            confirm
        </button>
          <button
            type="button"
            className="button-cancel"
            onClick={() => { dispatch(doCancel()); }}
          >
            cancel
        </button>
        </div>
      </div>
    </div>
  )
}