import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import UserPage from './Pages/UserPage';
import AdminPage from './Pages/AdminPage';
import OrderPage from './Pages/OrderPage';
import OrderFormPage from './Pages/OrderFormPage';
import OrderOnlinePage from './Pages/OrderOnlinePage';
import Footer from './Components/Footer';
import PageLoader from './Components/PageLoader';

const App = () => {
  return (
    <Router>
      <Header />
      <PageLoader>
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/cart" element={<OrderPage />} />
          <Route path="/orderonline" element={<OrderOnlinePage />} />
          <Route path="/order-form" element={<OrderFormPage />} />
        </Routes>
      </PageLoader>
      <Footer />
    </Router>
  );
};

export default App;
