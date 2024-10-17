import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from "react-bootstrap/Card";
import { FiPlus, FiFilter, FiArrowRight } from "react-icons/fi";
import { CiExport } from "react-icons/ci";
import '../assets/styles/pages/allenquiries.css';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";

const Enquiry = () => {
  const navigate = useNavigate();
  const studentsData = Array(50).fill(null).map((_, idx) => ({
    source: "Amazon",
    description: "Entertainment",
    status: "Pending",
    email: "idahrex@gmail.com",
    staff: "Paul James",
    date: "02/4/2016",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Slicing data for pagination
  const displayedData = studentsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="con">

      <div className="card-grid">
        <Card className="custom-card">
          <Card.Body className="card-body">
            <div className="card-title">New</div>
          </Card.Body>
          <p className="card-number">567</p>
        </Card>
        <Card className="custom-card">
          <Card.Body className="card-body">
            <div className="card-title">In-progress</div>
          </Card.Body>
          <p className="card-number">20</p>
        </Card>
        <Card className="custom-card">
          <Card.Body className="card-body">
            <div className="card-title">Enrolled</div>
          </Card.Body>
          <p className="card-number">120</p>
        </Card>
        <Card className="custom-card">
          <Card.Body className="card-body">
            <div className="card-title">OPt-out</div>
          </Card.Body>
          <p className="card-number">10</p>
        </Card>
        <Card className="custom-card">
          <Card.Body className="card-body">
            <div className="card-title">Closed</div>
          </Card.Body>
          <p className="card-number">5</p>
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
          {displayedData.map((student, idx) => (
            <tr key={idx}>
              <td>
                <Link to="enquiry-details" className="student-name">
              {student.source}
              </Link>
              </td>
              <td>{student.description}</td>
              <td>{student.email}</td>
              <td>{student.status}</td>
              <td>{student.staff}</td>
              <td>{student.date}</td>
              <td>
                <Dropdown className="table-drop-down">
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className="table-drop-down-title">
                    view
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="drop-down-menu">
                    <Dropdown.Item href="#/action-1">view</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <div className="next-page-pointer">
          <div>Next</div>
          <div><FiArrowRight /></div>
        </div>
        <div>
          {Array(Math.ceil(studentsData.length / itemsPerPage)).fill(null).map((_, idx) => (
            <button
              key={idx}
              className={`page-button ${currentPage === idx + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
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
    </div>
  );
};

export default Enquiry;
