import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, Outlet } from 'react-router-dom';
import logo from "../assets/images/reworklogo.png";
import { FiHome, FiBook, FiCreditCard, FiBell } from 'react-icons/fi';
import { LuFileBadge, LuUsers } from 'react-icons/lu';
import { SlGraph } from 'react-icons/sl';
import { RiCustomerService2Fill, RiSettings5Line } from 'react-icons/ri';
import Dropdown from 'react-bootstrap/Dropdown';
import '../assets/styles/components/drawer.css';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbReportSearch } from "react-icons/tb";
const Drawer = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="drawer-container">
      <div className='offcanva-holder'>
        <Offcanvas show={show} onHide={() => { }} backdrop={false} keyboard={false} style={{width:'250px'}} className="drawer-offcanvas">
          <Offcanvas.Header className="offcanvas-header">
            <Offcanvas.Title className="offcanvas-title">Rework Portal</Offcanvas.Title>
          </Offcanvas.Header>
          <img src={logo} alt="Rework logo" className="offcanvas-logo" />
          <p className="offcanvas-role"></p>
          <Offcanvas.Body className="offcanvas-body">
            <NavLink to='/drawer/dashboard' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <div><FiHome /></div>Dashboard
            </NavLink>
            <NavLink to='/drawer/students' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <div><LuUsers /></div>Enquiries
            </NavLink>
            <NavLink to='/drawer/enquiry-details' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <div><FiBell /></div>Enquiries details
            </NavLink>
            <NavLink to='/drawer/courses' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <div><FiBook /></div>Follow ups
            </NavLink>
            <NavLink to='/drawer/projects' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <div><RiCustomerService2Fill /></div>Customer
            </NavLink>
            <NavLink to='/drawer/trainers' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <div>< HiOutlineShoppingBag/></div>User management
            </NavLink>
            <NavLink to='/drawer/notifications' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <div><FiBell /></div>Notification
            </NavLink>
            <NavLink to='/drawer/notifications' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <div><TbReportSearch /></div>Report
            </NavLink>
            
            <hr className="offcanvas-divider" />
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle id="dropdown-autoclose-true" className="dropdown-toggle">
                <div><RiSettings5Line /></div> Set-Up
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <NavLink to='/drawer/system-activities' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <div><SlGraph /></div> <div>System activities</div>
            </NavLink>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <main className="drawer-main">
        <Outlet />
      </main>
    </div>
  );
};

export default Drawer;
