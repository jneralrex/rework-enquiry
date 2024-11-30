import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { LuLink2, LuUsers } from "react-icons/lu";
import { FiPlus, FiFilter } from "react-icons/fi";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { API_URL } from "../config";
import '../assets/styles/pages/dashboard.css';
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PieChart from "../components/PieChart";

const DashboardCard = ({ title, count, color, icon }) => (
  <Card className="dashboard-card">
    <Card.Body className="dashboard-card-body">
      <div className="card-icon-container" style={{ border: `1px solid ${color}` }}>
        {icon}
      </div>
      <div className="card-title">{title}</div>
    </Card.Body>
    <p className="card-stat">{count}</p>
    <div className="card-link">
      <div><LuLink2 size={15} style={{ color: '#16b6f0' }} /></div> <div>click link to view</div>
    </div>
  </Card>
);

const EnquiryRow = ({ enquiry }) => {
  const encodedId = btoa(enquiry._id); // Base64 encode enquiry ID
  return (
    <tr  key={`${enquiry.source}-${enquiry._id}`}>
      <td>{enquiry.source || "N/A"}</td>
      <td>{enquiry.customerDetails?.name || "N/A"}</td>
      <td>{enquiry.customerDetails?.email || "N/A"}</td>
      <td>{enquiry.status || "N/A"}</td>
      <td>{enquiry.followUpActions?.join(", ") || "N/A"}</td>
      <td>{enquiry.assignedStaff?.name || "N/A"}</td>
      <td>{new Date(enquiry.createdAt).toLocaleString() || "N/A"}</td>
      <td>
        <Dropdown className="table-drop-down">
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="table-drop-down-title"
          ></Dropdown.Toggle>
          <Dropdown.Menu className="drop-down-menu">
            <Link className='dash-link' to={`/dashboard/enquiries/${encodedId}`}>
              <Dropdown.Item href="#/action">
              View more     
              </Dropdown.Item>
               </Link>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
};

const FollowUpRow = ({ followUp }) => {
  const encodedId = btoa(followUp.enquiry._id); // Base64 encode follow-up ID
  return (
    <tr key={followUp.enquiry._id}>
      <td>{followUp.enquiry.customerDetails?.name || "N/A"}</td>
      <td>{followUp.actionTaken || "N/A"}</td>
      <td>{followUp.currentStaff?.name || "N/A"}</td>
      <td>{new Date(followUp.date).toLocaleString() || "N/A"}</td>
      <td>
        <Dropdown className="table-drop-down">
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="table-drop-down-title"
          ></Dropdown.Toggle>
          <Dropdown.Menu className="drop-down-menu">
            <Link className='dash-link' to={`/dashboard/enquiries/${encodedId}`}>
              <Dropdown.Item href="#/action">
              View more     
              </Dropdown.Item>
               </Link>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
};

const Dashboard = () => {
  const token = sessionStorage.getItem('authToken');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [enqError, setEnqError] = useState('');
  const [getAllEnq, setAllEnq] = useState([]);
  const [getAllStaff, setAllStaff] = useState([]);
  const [recentEnquiries, setRecentEnquiries] = useState([]);
  const [recentFollowUps, setRecentFollowUps] = useState([]);
  const [enqByStatus, setEnqByStatus] = useState([]);

  
  const [createEnq, setCreatedEnq] = useState({
    source: '',
    description: '',
    assignedStaff: '',
    status: '',
    followUpActions: [],
    customerDetails: {
      name: '',
      email: '',
      address: '',
      phone: '',
      course: '',
      quarter: '',
      session: '',
    },
  });

  const sources = ['Email', 'Phone', 'Social Media', 'Physical Walk-in', 'WhatsApp', 'Indirect Referral'];
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreatedEnq((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCustomerDetailsChange = (e) => {
    const { name, value } = e.target;
    setCreatedEnq((prev) => ({
      ...prev,
      customerDetails: {
        ...prev.customerDetails,
        [name]: value,
      },
    }));
  };

  useEffect(() => {
    const getAllEnquiries = async () => {
      try {
        const res = await axios.get(`${API_URL}/user/recent-enquiries`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
  
        if (res.data.success) {
          setRecentEnquiries(res.data.data.recentEnquiries);
          setRecentFollowUps(res.data.data.recentFollowUps);
        }
      } catch (err) {
        setError(err.response?.data?.message || "Failed to recent enquiries.");
      }
    };
    
    const getEnqByStatus = async () => {
      try {
        const res = await axios.get(`${API_URL}/user/enquiries-by-status`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
  
        if (res.data.success) {
          setEnqByStatus(res.data.data);
        }
      } catch (err) {
        setEnqError(err.response?.data?.message || "");
      }
    };
    getAllEnquiries();
    getEnqByStatus();
  }, [token]);  

  const getAllStaffDetails = async () => {
    const res = await axios.get(`${API_URL}/user/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (Array.isArray(res.data.data)) {
      setAllStaff(res.data.data);
    }
  };

  const handleStatusChange = (e) => {
    const { value } = e.target;
    setCreatedEnq((prev) => ({
      ...prev,
      status: value,
    }));
  };

  const createEnquiries = async (event) => {
    event.preventDefault();
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    if (!createEnq.status) {
      setError('Please select a status for the enquiry.');
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/user/enquiries`, createEnq, { headers });
      handleClose();
      getAllEnquiries(); // Refresh the data after creation
    } catch (error) {
      console.error('Error creating enquiry:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([ getAllStaffDetails()]);
      setLoading(false);

      // Get recent follow-ups after fetching all enquiries
      const recentFollowUpsData = getAllEnq.filter((enq) => enq.status === 'In Progress'); // You can customize this filter
      setRecentFollowUps(recentFollowUpsData);
    };
    fetchData();
  }, [getAllEnq]); 

  const totalEnquiries = getAllEnq.length;
  const newEnquiries = getAllEnq.filter((enq) => enq.status === 'New').length;
  const pendingEnquiries = getAllEnq.filter((enq) => enq.status === 'In Progress').length;
  const closedEnquiries = getAllEnq.filter((enq) => enq.status === 'Closed').length;

  return (
    <div className="dashboard-container">
      {/* Dashboard Cards */}
      <div className="dashboard-cards">
        <DashboardCard title="New Enquiries" count={newEnquiries} color="#16b6f0" icon={<LuUsers size={20} />} />
        <DashboardCard title="Pending Enquiries" count={pendingEnquiries} color="#ffc530" icon={<LuUsers size={20} style={{ color: "#ffc530" }} />} />
        <DashboardCard title="Closed Enquiries" count={closedEnquiries} color="#fc6565" icon={<LuUsers size={20} style={{ color: "#fc6565" }} />} />
        <DashboardCard title="Total Enquiries" count={totalEnquiries} color="#16b6f0" icon={<LuUsers size={20} style={{ color: "#16b6f0" }} />} />
      </div>

      {/* Recent Enquiries Table */}
      <div className="recent-enquiries-header">
        <div className="header-title-bold">Recent Enquiries</div>
        <div className="add-button" onClick={handleShow}>
          <FiPlus size={20} style={{ color: "white" }} /> Add Enquiry
        </div>
      </div>

      <div className="table-container">
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) :  error ? (
          <div className="error-message">{error}</div>
        ) :  (
          <Table bordered className="table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Follow-Up Action</th>
                <th>Assigned Staff</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {recentEnquiries.map((enquiry) => (
              <EnquiryRow key={`${enquiry.source}-${enquiry._id}`} enquiry={enquiry} />        
                ))}
            </tbody>
          </Table>
        )}
      </div>

      {/* Recent Follow-Ups */}
      <div className="second-enquiries-header">
        <div className="flex-between">
          <div className="header-title-bold">Recent Follow Ups</div>
          <div className="filter-button">
            <FiFilter size={20} style={{ color: "white" }} /> <div>Filter</div>
          </div>
        </div>
      </div>

      <div className="second-table">
        <div className="table-container2">
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : error ? (
          <div className="error-message">{error}</div>
        ) :  (
          <Table bordered className="table2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
              <th>Performed by</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {recentFollowUps.map((followUp) => (
          <FollowUpRow key={followUp.enquiry._id} followUp={followUp} />
        ))}
          </tbody>
        </Table>
        )}
        
        </div>

        {/* Pie Chart section */}
        <div className="pie-holder">
          <div className="header-title-bold2">Enquiries by Source</div>
          <div className="">
            <PieChart/> 
            {/* This is the pie chart component been imported from the PieChart.jsx */}
          </div>
        </div>
      </div>
<Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
>
  <Form>
    <Modal.Header>
      <Modal.Title>Create Enquiry</Modal.Title>
      {error && <div className="text-danger">{error}</div>}
    </Modal.Header>
    <Modal.Body >
      <div className='modal-form'>
        <div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Source</Form.Label>
            <Form.Select
              name="source"
              value={createEnq.source}
              onChange={handleInputChange}>
              <option value=""></option>
              {sources.map((source, index) => (
                <option key={index} value={source}>{source}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={createEnq.description}
              onChange={handleInputChange}
              style={{ height: '100px' }}
            />
          </Form.Group>
          <div>
          </div>
        </div>
        <div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Assigned staff</Form.Label>
            <Form.Select
              name="assignedStaff"
              value={createEnq.assignedStaff}
              onChange={handleInputChange}
            >
              <option value=""></option>
              {getAllStaff && getAllStaff.map((staff) => (
                <option key={staff.id} value={staff._id}>{staff.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Follow-up action</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="">
              <Form.Control
                as="textarea"
                value={createEnq.followUpActions.join(', ')}
                onChange={(e) => setCreatedEnq({ ...createEnq, followUpActions: e.target.value.split(', ') })}
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Form.Group>
          <div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <Form.Check
          inline
          label="New"
          name="status"
          type="radio"
          id="inline-radio-1"
          value="New"
          checked={createEnq.status === 'New'}
          onChange={handleStatusChange}
        />
        <Form.Check
          inline
          label="In Progress"
          name="status"
          type="radio"
          id="inline-radio-2"
          value="In Progress"
          checked={createEnq.status === 'In Progress'}
          onChange={handleStatusChange}
        />
        <Form.Check
          inline
          label="Enrolled"
          name="status"
          type="radio"
          id="inline-radio-3"
          value="Enrolled"
          checked={createEnq.status === 'Enrolled'}
          onChange={handleStatusChange}
        />
        <Form.Check
          inline
          label="Opt-out"
          name="status"
          type="radio"
          id="inline-radio-4"
          value="Opt-Out"
          checked={createEnq.status === 'Opt-Out'}
          onChange={handleStatusChange}
        />
        <Form.Check
          inline
          label="Closed"
          name="status"
          type="radio"
          id="inline-radio-4"
          value="Closed"
          checked={createEnq.status === 'Closed'}
          onChange={handleStatusChange}
        />
      </div>
      <div className='modal-form'>
        <div>
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
              name="name"
              value={createEnq.customerDetails.name}
              onChange={handleCustomerDetailsChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              name="address"
              value={createEnq.customerDetails.address}
              onChange={handleCustomerDetailsChange}
              style={{ height: '100px' }}
            />
          </Form.Group>
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Qurater</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="quarter"
              name="quarter"
              value={createEnq.customerDetails.quarter}
              onChange={handleCustomerDetailsChange}
            />
          </Form.Group>
          <div>
          </div>
        </div>
        <div>
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="email"
              name="email"
              value={createEnq.customerDetails.email}
              onChange={handleCustomerDetailsChange}
            />
          </Form.Group>
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>phone</Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="+234"
              name="phone"
              value={createEnq.customerDetails.phone}
              onChange={handleCustomerDetailsChange}
            />
          </Form.Group>
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Course (optional)</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="course"
              name="course"
              value={createEnq.customerDetails.course}
              onChange={handleCustomerDetailsChange}
            />
          </Form.Group>
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Session (optional)</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="session"
              name="session"
              value={createEnq.customerDetails.session}
              onChange={handleCustomerDetailsChange}
            />
          </Form.Group>
          <div>
          </div>
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer className='modal-footer'>
      <Button variant="primary" onClick={createEnquiries} >
        save
      </Button>
      <Button variant="danger" onClick={handleClose}>cancel</Button>
    </Modal.Footer>
  </Form>
</Modal>
    </div>
  );
};


export default Dashboard;