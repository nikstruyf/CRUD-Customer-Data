import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './page/login/LoginPage';
import Layout from './components/layout/Layout';
import CustomerPage from './page/customer/Customerpage';
import ManagaCustomerPage from './page/managecustomer/ManageCustomerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/customer/manage" element={<ManagaCustomerPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
