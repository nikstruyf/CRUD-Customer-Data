import React from "react";
import './customertable.css';
import { useSelector, useDispatch } from "react-redux";
import { customerArrayData } from "../../reducers/customer";
import { CustomerData } from "../../interface";
import { useNavigate } from "react-router-dom";

export default function CustomerTable() {
  const data = useSelector(customerArrayData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="table-container">
      <div>
        table option
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
            data.map((data: CustomerData) => (
              <tr key={data.id}>
                <td>
                  <input type="checkbox" />
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
      <div>
        table page
      </div>
    </div>
  )
}