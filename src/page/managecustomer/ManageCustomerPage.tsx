import React from "react";
import './managecustomerpage.css';

import CustomerForm from "../../components/customerform/CustomerForm";

export default function ManagaCustomerPage() {
  return (
    <div className="manage-customer page-bg">
      <div className="manage-customer page-container">
        <CustomerForm />
      </div>
    </div>
  )
}