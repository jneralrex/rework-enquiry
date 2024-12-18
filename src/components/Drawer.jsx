import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/images/reworklogo.png";
import '../assets/styles/components/drawer.css';
import { Container } from 'react-bootstrap';
import MyNav from './MyNav';
import { FaBell, FaUserCircle } from "react-icons/fa";
import LogoutButton from './LogoutButton';


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

    <div style={{ display: "flex" }} >
      <div className='offcanvas-body desktopDrawer'>
        <img src={logo} alt="Rework logo" className="offcanvas-logo" style={{ objectFit: "contain" }} />
        <h5 style={{ textAlign: "center" }}>Rework Portal</h5>
        <MyNav className="" />
      </div>

      <div className="drawer-container">

        <div className={`offcanva-holder ${isDesktop ? 'desktop' : ''}`}>
          <Offcanvas show={show} onHide={handleClose} style={{ width: '250px' }} className="drawer-offcanvas" backdrop={false}>
            <Offcanvas.Header closeButton={!isDesktop}>
              <Offcanvas.Title>Rework Portal</Offcanvas.Title>
            </Offcanvas.Header>
            <img src={logo} alt="Rework logo" className="offcanvas-logo" />
            <Offcanvas.Body className="offcanvas-body">
              <MyNav handleClose={handleClose} />
            </Offcanvas.Body>
          </Offcanvas>

        </div>

        <div className='dashBoard-container'>
          {!isDesktop && (
            <Button variant="" onClick={handleShow} className="hamburger-btn">
              <AiOutlineMenu size={24} />
            </Button>
          )}
          <div className='dash-title'>Dashboard</div>
          <div className="dropdown-main">
              <div className="dropbtn-notification"> <FaBell size={28} style={{ color: 'black' }} /></div>
              <div className="dropdown-content">
                {/* <div>notification 1</div>
                <div>notification 1</div>
                <div>notification 1</div>
                <div>notification 1</div>
                <div>notification 1</div> */}
                <div>See more</div>
              </div>
            </div>
            <div className="dropdown-main">
              <div className="dropbtn"> <FaUserCircle size={28} style={{ color: 'black' }} /></div>
              <div className="dropdown-content">
                <div><LogoutButton/></div>
                <div>Forgot password</div>
              </div>
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
