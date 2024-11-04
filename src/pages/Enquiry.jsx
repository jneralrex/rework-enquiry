import React, { useEffect, useState } from "react"; 
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from "react-bootstrap/Card";
import { FiPlus, FiFilter, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { CiExport } from "react-icons/ci";
import '../assets/styles/pages/allenquiries.css';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

const Enquiry = () => {
  const navigate = useNavigate();
  const [getAllEnq, setAllEnq] = useState([]);
  const token = sessionStorage.getItem('authToken');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [getAllStaff, setAllStaff] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Slicing data for pagination
  const indexOfLastEnquiry = currentPage * itemsPerPage;
  const indexOfFirstEnquiry = indexOfLastEnquiry - itemsPerPage;
  const currentEnquiries = getAllEnq.slice(indexOfFirstEnquiry, indexOfLastEnquiry);

  const getAllEnquiries = async () => {
    const res = await axios.get(`${API_URL}/user/enquiries`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (Array.isArray(res.data.data)) {
      setAllEnq(res.data.data);
    }
  };

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

  const getAllStaffDetails = async () => {
    const res = await axios.get(`${API_URL}/user/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
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
      'Content-Type': 'application/json'
    };

    if (!createEnq.status) {
      setError("Please select a status for the enquiry.");
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/user/enquiries`, createEnq, { headers });
      handleClose();
      setCreatedEnq({
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
      getAllEnquiries();
    } catch (error) {
      console.error("Error creating enquiry:", error);
      setError("Failed to create enquiry. Please try again.");
    }
  };

  useEffect(() => {
    getAllEnquiries();
    getAllStaffDetails();
  }, []);

  const totalEnquiries = getAllEnq.length;
  const newEnquiries = getAllEnq.filter(enq => enq.status === 'New').length;
  const pendingEnquiries = getAllEnq.filter(enq => enq.status === 'In Progress').length;
  const closedEnquiries = getAllEnq.filter(enq => enq.status === 'Closed').length;
  const optOut = getAllEnq.filter(enq => enq.status === 'Opt-Out').length;
  const enrolled = getAllEnq.filter(enq => enq.status === 'Enrolled').length;

  return (
    <div className="con">

      <div className="card-grid">
        <Card className="custom-card">
          <Card.Body className="card-body">
            <div className="card-title">New</div>
          </Card.Body>
          <p className="card-number">{newEnquiries}</p>
        </Card>
        <Card className="custom-card">
          <Card.Body className="card-body">
            <div className="card-title">In-progress</div>
          </Card.Body>
          <p className="card-number">{pendingEnquiries}</p>
        </Card>
        <Card className="custom-card">
          <Card.Body className="card-body">
            <div className="card-title">Enrolled</div>
          </Card.Body>
          <p className="card-number">{enrolled}</p>
        </Card>
        <Card className="custom-card">
          <Card.Body className="card-body">
            <div className="card-title">Opt-out</div>
          </Card.Body>
          <p className="card-number">{optOut}</p>
        </Card>
        <Card className="custom-card">
          <Card.Body className="card-body">
            <div className="card-title">Closed</div>
          </Card.Body>
          <p className="card-number">{closedEnquiries}</p>
        </Card>
      </div>
      <div className="button-group">
        <div className="custom-button" onClick={handleShow}>
          <FiPlus size={20} />
          <div>Add</div>
        </div>
        <div className="custom-button">
          <FiFilter size={20} />
          <div>Filter</div>
        </div>
        <div className="custom-button">
          <CiExport size={20} />
          <div>Export</div>
        </div>
      </div>

      {/* Table with manual pagination */}
      <div className="table-container">
        <Table bordered className="table">
          <thead>
            <tr>
              <th>Source</th>
              <th>Description</th>
              <th>Status</th>
              <th>Follow-Up Actions</th>
              <th>Assigned Staff</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEnquiries.length === 0 ? (
              <tr>
                <td colSpan="7">No enquiries available.</td>
              </tr>
            ) : (
              currentEnquiries.map((enqDetails) => (
                <tr key={enqDetails._id}>
                  <td>{enqDetails?.source}</td>
                  <td>{enqDetails?.description || 'N/A'}</td>
                  <td>{enqDetails?.status}</td>
                  <td>{Array.isArray(enqDetails?.followUpActions) ? enqDetails.followUpActions.join(', ') : 'N/A'}</td>
                  <td>{enqDetails?.assignedStaff?.name || 'N/A'}</td>
                  <td>{new Date(enqDetails?.createdAt).toLocaleString() || 'N/A'}</td>
                  <td>
                    <Dropdown className="table-drop-down">
                      <Dropdown.Toggle variant="success" id="dropdown-basic" className="table-drop-down-title">
                        view
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="drop-down-menu">
                        <Dropdown.Item href="#/action-1">View all enquiries</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <div className="prev-page-pointer" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
          <FiArrowLeft />
          <div>Previous</div>
        </div>
        <div className="page-numbers">
          Page {currentPage} of {Math.ceil(totalEnquiries / itemsPerPage)}
        </div>
        <div className="next-page-pointer" onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(totalEnquiries / itemsPerPage)))}>
          <div>Next</div>
          <FiArrowRight />
        </div>
      </div>

      {/* Modal for creating enquiry */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={createEnquiries}>
            <FloatingLabel controlId="floatingSelect" label="Source">
              <Form.Select onChange={handleInputChange} name="source">
                <option>Select Source</option>
                {sources.map((src, index) => (
                  <option key={index} value={src}>{src}</option>
                ))}
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Description">
              <Form.Control
                as="textarea"
                onChange={handleInputChange}
                name="description"
                placeholder="Leave a description here"
                style={{ height: '100px' }}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelect" label="Assigned Staff">
              <Form.Select onChange={handleInputChange} name="assignedStaff">
                <option>Select Staff</option>
                {getAllStaff.map((staff, index) => (
                  <option key={index} value={staff._id}>{staff.name}</option>
                ))}
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelect" label="Status">
              <Form.Select onChange={handleStatusChange} name="status">
                <option>Select Status</option>
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
                <option value="Opt-Out">Opt-Out</option>
                <option value="Enrolled">Enrolled</option>
              </Form.Select>
            </FloatingLabel>
            <Button variant="primary" type="submit">Create Enquiry</Button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Enquiry;
