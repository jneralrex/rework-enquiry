import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, Outlet } from 'react-router-dom';
import { FiHome, FiBook, FiBell, FiSearch, FiUser } from 'react-icons/fi';
import { LuLogOut, LuUsers } from 'react-icons/lu';
import { SlGraph } from 'react-icons/sl';
import { RiCustomerService2Fill, RiSettings5Line } from 'react-icons/ri';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbReportSearch } from "react-icons/tb";
import Button from 'react-bootstrap/Button';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/images/reworklogo.png";
import '../assets/styles/components/drawer.css';
import { BiUserCheck } from "react-icons/bi";


const Drawer = () => {
  const [show, setShow] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1440);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    
    <div className="drawer-container">
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
            <NavLink to='/drawer/system-activities' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <BiUserCheck /> Change password
            </NavLink>
            <NavLink to='/drawer/system-activities' className={({ isActive }) => isActive ? "link active-link" : "link"}>
              <LuLogOut style={{color:"red"}}/> Log out
            </NavLink>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', position:'fixed', zIndex:'99', marginBottom:'20px', backgroundColor:'white', padding:'2px', boxShadow:'1px 0px 4px 0px grey'}}>
      {!isDesktop && (
        <Button variant="" onClick={handleShow} className="hamburger-btn">
          <AiOutlineMenu size={24} />
        </Button>
      )}
          <div>Dashboard</div>
          <div style={{ border: '1px solid grey', width: '25%', display: 'flex', borderRadius: '10px', alignItems: 'center', justifyContent: 'space-around', padding: '5px', zIndex: '10' }}>
            <input type="text" placeholder='search' style={{ outline: 'none', border: 'none', width: '90%', zIndex: '10' }} />
            <FiSearch />
          </div>

          <div><FiBell /></div>

          <div style={{ border: '1px solid grey', display: 'flex', alignItems: 'center', justifyContent: 'space-around', zIndex: '10', borderRadius:'3px' }}>
            <FiUser />
            <select name="" id="" style={{ border: 'none', outline: 'none', zIndex: '10' }}>
              <option value=""></option>
              <option value="">Log out</option>
            </select>
          </div>
        </div>

      <main className="drawer-main">
        <Outlet />
      </main>
    </div>
  );
};

export default Drawer;
