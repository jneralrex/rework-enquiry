import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { LuLink2, LuUsers } from "react-icons/lu";
import { FiPlus, FiFilter } from "react-icons/fi";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { RiExchangeBoxLine } from "react-icons/ri";
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { API_URL } from "../config";
import '../assets/styles/pages/dashboard.css';

const Dashboard = () => {
  const token = sessionStorage.getItem('authToken');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [error, setError] = useState('');
  const [getAllEnq, setAllEnq] = useState([]);
  const [getAllStaff, setAllStaff] = useState([]);
  const [status, setStatus] = useState('');
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
      const res = await axios.post(`${API_URL}/user/enquiries`, { ...createEnq, status }, { headers });
      handleClose();
      getAllEnquiries();
    } catch (error) {
      console.error("Error creating enquiry:", error);
    }
  };

  useEffect(() => {
    getAllEnquiries();
    getAllStaffDetails();
  }, []);


  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-cards">
          <Card className="dashboard-card">
            <Card.Body className="dashboard-card-body">
              <div className="card-icon-container">
                <LuUsers size={20} />
              </div>
              <div className="card-title">New Enquiries</div>
            </Card.Body>
            <p className="card-stat">20</p>
            <div className="card-link">
              <div><LuLink2 size={15} style={{ color: '#16b6f0' }} /></div> <div>click link to view</div>
            </div>
          </Card>

          <Card className="dashboard-card">
            <Card.Body className="dashboard-card-body">
              <div className="card-icon-container" style={{ border: "1px solid #ffc530" }}>
                <LuUsers size={20} style={{ color: "#ffc530" }} />
              </div>
              <div className="card-title">Pending Enquiries</div>
            </Card.Body>
            <p className="card-stat">5</p>
            <div className="card-link">
              <div><LuLink2 size={15} style={{ color: '#16b6f0' }} /></div> <div>click link to view</div>
            </div>
          </Card>

          <Card className="dashboard-card">
            <Card.Body className="dashboard-card-body">
              <div className="card-icon-container" style={{ border: "1px solid #fc6565" }}>
                <LuUsers size={20} style={{ color: "#fc6565" }} />
              </div>
              <div className="card-title">Closed Enquiries</div>
            </Card.Body>
            <p className="card-stat">52</p>
            <div className="card-link">
              <div><LuLink2 size={15} style={{ color: '#16b6f0' }} /></div> <div>click link to view</div>
            </div>
          </Card>

          <Card className="dashboard-card">
            <Card.Body className="dashboard-card-body">
              <div className="card-icon-container" style={{ border: "1px solid #16b6f0" }}>
                <LuUsers size={20} style={{ color: "#16b6f0" }} />
              </div>
              <div className="card-title">Total Enquiries</div>
            </Card.Body>
            <p className="card-stat">24</p>
            <div className="card-link">
              <div><LuLink2 size={15} style={{ color: '#16b6f0' }} /></div> <div>click link to view</div>
            </div>
          </Card>

          <Card className="dashboard-card">
            <Card.Body className="dashboard-card-body">
              <div className="card-icon-container" style={{ border: "1px solid #73ce97" }}>
                <RiExchangeBoxLine size={20} style={{ color: "#73ce97" }} />
              </div>
              <div className="card-title">Conversion rate</div>
            </Card.Body>
            <p className="card-stat">78%</p>
            <div className="card-link">
              <div><LuLink2 size={15} style={{ color: '#16b6f0' }} /></div> <div>click link to view</div>
            </div>
          </Card>
        </div>

        <div className="recent-enquiries-header">
          <div className="header-title-bold">All Enquiries</div>
          <div className="add-button" onClick={handleShow}>
            <FiPlus size={20} style={{ color: "white" }} /> Add Enquiry
          </div>
        </div>
        <div className="table-container">
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
              {getAllEnq && getAllEnq.map((enqDetails) => (
                <tr key={enqDetails._id}>
                  <td>{enqDetails?.source}</td>
                  <td>{enqDetails?.customerDetails?.name || 'N/A'}</td>
                  <td>{enqDetails?.customerDetails?.email}</td>
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
                        <Dropdown.Item href="#/action-2"></Dropdown.Item>
                        <Dropdown.Item href="#/action-3"></Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="second-enquiries-header">
          <div className="flex-between">
            <div className="header-title-bold">Recent Enquiries</div>
            <div className="filter-button">
              <FiFilter size={20} style={{ color: "white" }} /> <div>Filter</div>
            </div>
          </div>
        </div>

        <div className="second-table">
          <div className="table-container2">

            <Table bordered className="table2">
              <thead>
                <tr>
                  <th>Enquiry ID</th>
                  <th>Action</th>
                  <th>Performed by</th>
                  <th>Details</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#2253</td>
                  <td>taken</td>
                  <td>Charles Vermit </td>
                  <td>Full-stack development</td>
                  <td> <Dropdown className="table-drop-down">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="table-drop-down-title">
                      view
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="drop-down-menu">
                      <Dropdown.Item href="#/action-1">View all enquiries</Dropdown.Item>
                      <Dropdown.Item href="#/action-2"></Dropdown.Item>
                      <Dropdown.Item href="#/action-3"></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown></td>
                </tr>
                <tr>
                  <td>#2253</td>
                  <td>taken</td>
                  <td>Charles Vermit </td>
                  <td>Full-stack development</td>
                  <td> <Dropdown className="table-drop-down">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="table-drop-down-title">
                      view
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="drop-down-menu">
                      <Dropdown.Item href="#/action-1">View all enquiries</Dropdown.Item>
                      <Dropdown.Item href="#/action-2"></Dropdown.Item>
                      <Dropdown.Item href="#/action-3"></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown></td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div className="pie-holder">
            <div className="header-title-bold2">Enquiries by Source</div>
            <div className="pie-chart"></div>
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
                    {getAllEnq && getAllEnq.map((enq) => (
                      <option key={enq.source} value={enq.source}>{enq.source}</option>
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
                      <option key={staff.id} value={staff.id}>{staff.name}</option>
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
            <Row className="mb-3">
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
                label="In-progress"
                name="status"
                type="radio"
                id="inline-radio-2"
                value="In-progress"
                checked={createEnq.status === 'In-progress'}
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
                value="Opt-out"
                checked={createEnq.status === 'Opt-out'}
                onChange={handleStatusChange}
              />
            </Row>


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
    </>
  );
};

export default Dashboard;
