import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RoutesProtector = () => {
  const currentUser = useSelector((state) => state.user?.user);
  const token = sessionStorage.getItem("authToken"); // Get token from sessionStorage
  const isLoading = useSelector((state) => state.user?.loading); // Assuming the loading state is stored here
  const location = useLocation();

  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (!token || !currentUser) {
    // Redirect to login page if no token or no currentUser
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RoutesProtector;
