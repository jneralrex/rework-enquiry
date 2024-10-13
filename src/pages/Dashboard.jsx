import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { LuLink2, LuUsers } from "react-icons/lu";
import { FiPlus, FiFilter, FiUser } from "react-icons/fi";
import '../assets/styles/pages/dashboard.css';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { RiExchangeBoxLine, } from "react-icons/ri";
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <div className="header-title-bold">Recent Enquiries</div>
          <div className="add-button"  onClick={handleShow}>
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
              <tr>
                <td>Amazon</td>
                                <td>Charles Vermit </td>
                <td>idahrex@gmail.com</td>
                <td>Pending</td>
                <td></td>
                <td>Paul James</td>
                <td>02/4/2016</td>
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
                <td>Amazon</td>
                                <td>Charles Vermit </td>
                <td>idahrex@gmail.com</td>
                <td>Pending</td>
                <td></td>
                <td>Paul James</td>
                <td>02/4/2016</td>
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
                <td>Amazon</td>
                                <td>Charles Vermit </td>
                <td>idahrex@gmail.com</td>
                <td>Pending</td>
                <td></td>
                <td>Paul James</td>
                <td>02/4/2016</td>
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
                <td>Amazon</td>
                                <td>Charles Vermit </td>
                <td>idahrex@gmail.com</td>
                <td>Pending</td>
                <td></td>
                <td>Paul James</td>
                <td>02/4/2016</td>
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
                <td>Amazon</td>
                                <td>Charles Vermit Anthony </td>
                <td>idahrex@gmail.com</td>
                <td>Pending</td>
                <td></td>
                <td>Paul James</td>
                <td>02/4/2016</td>
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
        </Modal.Header>
        <Modal.Body >
            <div className='modal-form'>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Source</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder=""
                    style={{ height: '100px' }}
                  />
                </Form.Group>
                <div>
                </div>
              </div>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Assigned staff</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Follow-up action</Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="">
                    <Form.Control
                      as="textarea"
                      style={{ height: '100px' }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <div>
                </div>
              </div>
            </div>
            <Row className="mb-3">
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="New"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="In-progress"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Enrolled"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Opt-out"
                    name="group1"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                </div>
              ))}
            </Row>
            <div className='modal-form'>
              <div>
                <Form.Group  md="4" controlId="validationCustom01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    defaultValue="Mark"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                  />
                </Form.Group>

                <Form.Group  md="4" controlId="validationCustom01">
                  <Form.Label>Qurater</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                  />
                </Form.Group>

                <div>
                </div>
              </div>

              <div>
                <Form.Group  md="4" controlId="validationCustom01">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="email"
                    defaultValue="xyz@rework.com"
                  />
                </Form.Group>

                <Form.Group  md="4" controlId="validationCustom01">
                  <Form.Label>phone</Form.Label>
                  <Form.Control
                    required
                    type="tel"
                    placeholder="+234"
                    defaultValue="+234"
                  />
                </Form.Group>

                <Form.Group  md="4" controlId="validationCustom01">
                  <Form.Label>Course (optional)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                  />
                </Form.Group>

                <Form.Group  md="4" controlId="validationCustom01">
                  <Form.Label>Session (optional)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                  />
                </Form.Group>
                <div>
                </div>
              </div>
            </div>
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <Button variant="primary" >
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
