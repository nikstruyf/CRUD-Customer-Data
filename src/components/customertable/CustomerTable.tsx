import React, { useState, useEffect } from "react";
import './customertable.css';
import { useSelector, useDispatch } from "react-redux";
import { customerArrayData } from "../../reducers/customer";
import { CustomerData } from "../../interface";
import { useNavigate } from "react-router-dom";
import { multipleUpdateCustomer, multipleDeleteCustomer } from "../../reducers/customer";
import { Pagination } from "@mui/material";
import { confirmState, askConfirm, resetConfirm } from "../../reducers/confirmstate";

export default function CustomerTable() {
  const data = useSelector(customerArrayData);
  const confirm = useSelector(confirmState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filterCode, setFilterCode] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number[]>([])

  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const pageChange = (e: any, p: any) => {
    setPage(p);
  }

  function ActionChangeStatus(status: string) {
    selectedIndex.sort();
    dispatch(multipleUpdateCustomer({
      status,
      arrIndex: selectedIndex
    }));
  }

  function AskConfirmBeforeAction() {
    dispatch(askConfirm({
      message: 'comfirm delete?',
      status: '',
      display: true
    }));
  }

  function ActionDelete() {
    selectedIndex.sort().reverse();
    dispatch(multipleDeleteCustomer(selectedIndex));
  }

  useEffect(() => {
    if (confirm.status === 'confirm' && isDelete) {
      ActionDelete();
      setSelectedIndex([]);
    }
    setIsDelete(false);
    dispatch(resetConfirm());
  }, [confirm.status]);

  return (
    <div className="table-container">
      <div className="table-option">
        <div className="filter-group">
          <input
            className="filter-code"
            type="text"
            placeholder="enter code"
            onChange={(e) => { setFilterCode(e.target.value); }}
          />
          <div className="option-radio">
            <label htmlFor="radio-all" className="radio-label">
              <input
                type="radio"
                id="radio-all"
                name="radio"
                defaultChecked
                onClick={() => { setFilterStatus('all'); }}
              />
              <span className="radio-ckeckbox" />
              <span>all</span>
            </label>
            <label htmlFor="radio-storefront" className="radio-label">
              <input
                type="radio"
                id="radio-storefront"
                name="radio"
                onClick={() => { setFilterStatus('active'); }}
              />
              <span className="radio-ckeckbox" />
              <span>active</span>
            </label>
            <label htmlFor="radio-werehouse" className="radio-label">
              <input
                type="radio"
                id="radio-werehouse"
                name="radio"
                onClick={() => { setFilterStatus('inactive'); }}
              />
              <span className="radio-ckeckbox" />
              <span>inactive</span>
            </label>
          </div>
        </div>
        <div className={`button-group ${selectedIndex.length > 0 ? '' : 'hide'}`}>
        <button
            type="button"
            className="button-select"
            onClick={() => { 
              let arr = [];
              for (let i = 0; i < data.length; i++) {
                arr.push(i);
              }
              setSelectedIndex(arr);
            }}
          >
            select all
          </button>
          <button
            type="button"
            className="button-select"
            onClick={() => { setSelectedIndex([]); }}
          >
            clear all
          </button>
        </div>
        <div className={`button-group ${selectedIndex.length > 0 ? '' : 'hide'}`}>
          <button
            type="button"
            className="button-set-status"
            onClick={() => {
              ActionChangeStatus('active');
              setSelectedIndex([]);
            }}
          >
            active
          </button>
          <button
            type="button"
            className="button-set-status"
            onClick={() => {
              ActionChangeStatus('inactive');
              setSelectedIndex([]);
            }}
          >
            inactive
          </button>
          <span className="vertical-line" />
          <button
            type="button"
            className="button-delete"
            onClick={() => {
              AskConfirmBeforeAction();
              setIsDelete(true);
            }}
          >
            delete
          </button>
        </div>
      </div>
      <div className="table-content">
        <table className="customer-table">
          <thead>
            <tr>
              <th className="head-select" />
              <th className="head-status">
                status
              </th>
              <th className="head-code">
                code
              </th>
              <th className="head-name">
                name
              </th>
              <th className="head-email">
                email
              </th>
              <th className="head-tel">
                telephone number
              </th>
              <th className="head-edit" />
            </tr>
          </thead>
          <tbody>
            {
              data.filter((el: CustomerData) => el.code.includes(filterCode))
                .filter(
                  (el: CustomerData) => filterStatus === 'all'
                    ? el
                    : el.status === filterStatus
                )
                .map((data: CustomerData, index: number) => {
                  if (index >= page * 10 - 10 && index < page * 10)
                    return (
                      <tr
                        className={`row ${index % 2 === 0 ? 'even' : 'odd'}`}
                        key={data.id}
                      >
                        <td className="body-select">
                          <input
                            type="checkbox"
                            checked={selectedIndex.includes(index)}
                            onChange={(e) => {
                              const { target } = e;
                              if ((target as HTMLInputElement).checked) {
                                setSelectedIndex([
                                  ...selectedIndex,
                                  index
                                ]);
                              } else {
                                setSelectedIndex([
                                  ...selectedIndex.slice(
                                    0, selectedIndex.indexOf(index)
                                  ),
                                  ...selectedIndex.slice(selectedIndex.indexOf(index) + 1)
                                ])
                              }
                            }}
                          />
                        </td>
                        <td className={`body-status ${data.status}`}>
                          <span>{data.status}</span>
                        </td>
                        <td className="body-code">
                          {data.code}
                        </td>
                        <td className="body-name">
                          {data.name}
                        </td>
                        <td className="body-email">
                          {data.email}
                        </td>
                        <td className="body-tel">
                          {data.tel}
                        </td>
                        <td className="body-edit">
                          <button
                            type="button"
                            onClick={() => { navigate(`/customer/manage?form-type=update&id=${data.id}`); }}
                          >
                            update
                          </button>
                        </td>
                      </tr>
                    )
                })
            }
          </tbody>
        </table>
      </div>
      <div className="table-pagination">
        <Pagination
          count={Math.ceil(data.length / 10)}
          page={page}
          onChange={pageChange}
        />
      </div>
    </div>
  )
}
