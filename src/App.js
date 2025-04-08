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
import Blog from './Pages/Blog';
import ContactUs from './Pages/ContactPage';
import './App.css';

const App = () => {
  const [cursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const cursor = document.querySelector('.cursor-animation');
    if (!cursor) return;

    const moveCursor = e => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);
  return (
    <Router>
       {/* Cursor Animation */}
       <div style={{
          position: 'absolute',
          width: '50px',
          height: '50px',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          left: cursorPosition.x,
          top: cursorPosition.y,
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }} className="cursor-animation"></div>
      <Header />
      <PageLoader>
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/cart" element={<OrderPage />} />
          <Route path="/orderonline" element={<OrderOnlinePage />} />
          <Route path="/order-form" element={<OrderFormPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </PageLoader>
      <Footer />
    </Router>
  );
};

export default App;
