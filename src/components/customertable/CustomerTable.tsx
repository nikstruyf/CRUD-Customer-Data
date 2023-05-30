import React, { useState } from "react";
import './customertable.css';
import { useSelector, useDispatch } from "react-redux";
import { customerArrayData } from "../../reducers/customer";
import { CustomerData } from "../../interface";
import { useNavigate } from "react-router-dom";
import { multipleUpdateCustomer, multipleDeleteCustomer } from "../../reducers/customer";
import { Pagination } from "@mui/material";

export default function CustomerTable() {
  const data = useSelector(customerArrayData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filterCode, setFilterCode] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number[]>([])

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

  function ActionDelete() {
    selectedIndex.sort().reverse();
    dispatch(multipleDeleteCustomer(selectedIndex));
  }

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
            onClick={() => { ActionChangeStatus('active'); }}
          >
            active
          </button>
          <button
            type="button"
            className="button-set-status"
            onClick={() => { ActionChangeStatus('inactive'); }}
          >
            inactive
          </button>
          <span className="vertical-line" />
          <button
            type="button"
            className="button-delete"
            onClick={() => { ActionDelete(); }}
          >
            delete
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th />
            <th>
              status
            </th>
            <th>
              code
            </th>
            <th>
              name
            </th>
            <th>
              email
            </th>
            <th>
              telephone number
            </th>
            <th />
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
            .map((data: CustomerData, index: number) => (
              <tr key={data.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIndex.includes(index)}
                    onChange={(e) => {
                      const { target } = e;
                      if((target as HTMLInputElement).checked) {
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
                <td>
                  {data.status}
                </td>
                <td>
                  {data.code}
                </td>
                <td>
                  {data.name}
                </td>
                <td>
                  {data.email}
                </td>
                <td>
                  {data.tel}
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => { navigate(`/customer/manage?form-type=update&id=${data.id}`); }}
                  >
                    update
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
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
