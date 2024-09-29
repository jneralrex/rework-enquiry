import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, Outlet } from 'react-router-dom';
import { FiHome, FiBook, FiBell } from 'react-icons/fi';
import { LuUsers } from 'react-icons/lu';
import { SlGraph } from 'react-icons/sl';
import { RiCustomerService2Fill, RiSettings5Line } from 'react-icons/ri';
import Dropdown from 'react-bootstrap/Dropdown';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbReportSearch } from "react-icons/tb";
import Button from 'react-bootstrap/Button';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/images/reworklogo.png";
import '../assets/styles/components/drawer.css';

const Drawer = () => {
  const [show, setShow] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="drawer-container">
      {!isDesktop && (
        <Button variant="primary" onClick={handleShow} className="hamburger-btn">
          <AiOutlineMenu size={24} />
        </Button>
      )}

      <div className={`offcanva-holder ${isDesktop ? 'desktop' : ''}`}>
        <Offcanvas show={isDesktop || show} onHide={handleClose} style={{ width: '250px' }} className="drawer-offcanvas" backdrop={false}>
          <Offcanvas.Header closeButton={!isDesktop}>
            <Offcanvas.Title>Rework Portal</Offcanvas.Title>
          </Offcanvas.Header>
          <img src={logo} alt="Rework logo" className="offcanvas-logo" />
          <Offcanvas.Body className="offcanvas-body">
            <NavLink to='/drawer/dashboard' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <FiHome /> Dashboard
            </NavLink>
            <NavLink to='/drawer/enquiry' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <LuUsers /> Enquiries
            </NavLink>
            <NavLink to='/drawer/enquiry-details' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <FiBell /> Enquiries details
            </NavLink>
            <NavLink to='/drawer/follow-up' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <FiBook /> Follow ups
            </NavLink>
            <NavLink to='/drawer/customer' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <RiCustomerService2Fill /> Customer
            </NavLink>
            <NavLink to='/drawer/user-management' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <HiOutlineShoppingBag /> User management
            </NavLink>
            <NavLink to='/drawer/notifications' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <FiBell /> Notification
            </NavLink>
            <NavLink to='/drawer/report' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <TbReportSearch /> Report
            </NavLink>
            <hr className="offcanvas-divider" />
            <Dropdown>
              <Dropdown.Toggle id="dropdown-autoclose-true">
                <RiSettings5Line /> Set-Up
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <NavLink to='/drawer/system-activities' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <SlGraph /> System activities
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
