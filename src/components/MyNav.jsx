
 
import { NavLink } from 'react-router-dom';
import { FiHome, FiBook, FiBell,  } from 'react-icons/fi';
import { LuLogOut, LuUsers } from 'react-icons/lu';
 
import { RiCustomerService2Fill,  } from 'react-icons/ri';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbReportSearch } from "react-icons/tb";
 
 
import '../assets/styles/components/drawer.css';
import { BiUserCheck } from "react-icons/bi";
 


const MyNav = () => {
    
    return (<>
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
    </>);
};

export default MyNav;