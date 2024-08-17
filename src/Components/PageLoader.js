// src/Components/PageLoader.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader/Loader';

const PageLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [location]);

  return loading ? <Loader /> : children;
};

export default PageLoader;
