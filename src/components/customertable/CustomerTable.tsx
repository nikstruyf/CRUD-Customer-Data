import React from "react";
import './customertable.css';

const data = [
  {
    status: 'active',
    code: '0001',
    name: 'nik',
    email: 'nikkunraho@gmail.com',
    tel: '0933912725'
  },{
    status: 'inactive',
    code: '0002',
    name: 'nan',
    email: 'memorymovies12@gmail.com',
    tel: '09332773605'
  }
]

export default function CustomerTable() {
  return (
    <div className="table-container">
      <div>
        table option
      </div>
      <table>
        <tr>
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
        </tr>
        {
          data.map((data) => (
            <tr>
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
            </tr>
          ))
        }
      </table>
      <div>
        table page
      </div>
    </div>
  )
}