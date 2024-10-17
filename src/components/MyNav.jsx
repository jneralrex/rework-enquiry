import { NavLink } from 'react-router-dom';
import { FiHome, FiBook, FiBell } from 'react-icons/fi';
import { LuLogOut, LuUsers } from 'react-icons/lu';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbReportSearch } from "react-icons/tb";
import { BiUserCheck } from "react-icons/bi";
import '../assets/styles/components/drawer.css';

const MyNav = ({ handleClose }) => {
  return (
    <>
      <NavLink
        to='/drawer/dashboard'
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        onClick={handleClose} // Close the drawer
      >
        <FiHome /> Dashboard
      </NavLink>
      <NavLink
        to='/drawer/enquiry'
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        onClick={handleClose}
      >
        <LuUsers /> Enquiries
      </NavLink>
      <NavLink
        to='/drawer/follow-up'
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        onClick={handleClose}
      >
        <FiBook /> Follow ups
      </NavLink>
      <NavLink
        to='/drawer/customer'
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        onClick={handleClose}
      >
        <RiCustomerService2Fill /> Customer
      </NavLink>
      <NavLink
        to='/drawer/user-management'
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        onClick={handleClose}
      >
        <HiOutlineShoppingBag /> User management
      </NavLink>
      <NavLink
        to='/drawer/notifications'
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        onClick={handleClose}
      >
        <FiBell /> Notification
      </NavLink>
      <hr className="offcanvas-divider" />
      <NavLink
        to='/drawer/change-password'
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        onClick={handleClose}
      >
        <BiUserCheck /> Change password
      </NavLink>
      <NavLink
        to='/drawer/logout'
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        onClick={handleClose}
      >
        <LuLogOut style={{ color: "red" }} /> Log out
      </NavLink>
    </>
  );
};

export default MyNav;
