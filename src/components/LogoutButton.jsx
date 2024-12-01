import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/user/UserSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear Redux state and sessionStorage
    sessionStorage.removeItem("authToken");
    dispatch(logout());

    // Redirect to the login page
    navigate("/");
  };

  return (
    <div onClick={handleLogout} className="logout-button">
      Log out
    </div>
  );
};

export default LogoutButton;
