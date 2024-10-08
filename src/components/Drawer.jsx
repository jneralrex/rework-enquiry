import  { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, Outlet } from 'react-router-dom';
import { FiHome, FiBook, FiBell, FiSearch, FiUser } from 'react-icons/fi';
import { LuLogOut, LuUsers } from 'react-icons/lu';
 
import { RiCustomerService2Fill,  } from 'react-icons/ri';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbReportSearch } from "react-icons/tb";
import Button from 'react-bootstrap/Button';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/images/reworklogo.png";
import '../assets/styles/components/drawer.css';
import { BiUserCheck } from "react-icons/bi";
import { Container } from 'react-bootstrap';
import MyNav from './MyNav';


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

  <div style={{ display:"flex" }} >
    <div  className='offcanvas-body desktopDrawer'>
      <img src={logo} alt="Rework logo" className="offcanvas-logo"  style={{ objectFit:"contain" }}/>
      <h5 style={{ textAlign:"center" }}>Rework Portal</h5>
      <MyNav className=""/>
    </div>

    <div className="drawer-container">
      
      <div className={`offcanva-holder ${isDesktop ? 'desktop' : ''}`}>
            <Offcanvas show={show} onHide={handleClose} style={{ width: '250px' }} className="drawer-offcanvas" backdrop={false}>
              <Offcanvas.Header closeButton={!isDesktop}>
                <Offcanvas.Title>Rework Portal</Offcanvas.Title>
              </Offcanvas.Header>
              <img src={logo} alt="Rework logo" className="offcanvas-logo" />
              <Offcanvas.Body className="offcanvas-body">
                <MyNav/>
              </Offcanvas.Body>
            </Offcanvas>
      </div>
        
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center',zIndex:'99', marginBottom:'20px', backgroundColor:'white', padding:'2px',borderBottom:"2px solid #eaeaea", }}>
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
          <Container><Outlet /> </Container>
        </main>
      </div>
    </div>
  );
};

export default Drawer;
