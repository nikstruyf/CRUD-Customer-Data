import React from "react";
import './customerpage.css';

import CustomerOptionBar from "../../components/customeroptionbar/CustomerOptionBar";
import CustomerTable from "../../components/customertable/CustomerTable";

export default function CustomerPage() {
  return (
    <div className="page-bg">
      <div className="customer-option-bar">
        <CustomerOptionBar />
      </div>
      <div>
        <CustomerTable />
      </div>
    </div>
  )
}