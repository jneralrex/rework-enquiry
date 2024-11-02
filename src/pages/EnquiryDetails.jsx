import React, { useEffect, useState } from 'react';
import '../assets/styles/pages/enquiriesdetails.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { SlOptionsVertical } from "react-icons/sl";
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import { API_URL } from '../config';
import { Spinner } from 'react-bootstrap';

const EnquiryDetails = () => {
  const { encodedId } = useParams();
  const realId = atob(encodedId);

  const token = sessionStorage.getItem('authToken');
  const [show, setShow] = useState(false);
  const [showUpdate, setUpdateShow] = useState(false);
  const [showAction, setActionShow] = useState(false);
  const [showDelete, setDeleteShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [getEnqById, setGetEnqById] = useState(null); 

    //I am splitting slash / from the current date and I am replacing it with dash - :
  const formatDateWithDashes = (date = new Date()) => {
    return date.toLocaleDateString('en-GB').split('/').join('-');
  };
  
  //I am rendering date to the format that is accepted by the API:
  const formattedDateWithDashes = formatDateWithDashes();
  
  const [followUpMessage, setFollowUpMessage] = useState({
    enquiry: realId, 
    date: formattedDateWithDashes,
    actionTaken: '',
    currentStaff: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdateClose = () => setUpdateShow(false);
  const handleUpdateShow = () => setUpdateShow(true);
  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);
  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      createFollowUpMessage(); // Only create follow-up if form is valid
    } else {
      setValidated(true); // Show validation errors
    }
  };
  

  const now = 60;

  const getEnq = async () => {
    try {
      const res = await axios.get(`${API_URL}/user/enquiries/${realId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setGetEnqById(res.data.data);
      setFollowUpMessage(prevState => ({
        ...prevState,
        currentStaff: res.data.data.assignedStaff?._id || ''
      }));
    } catch (error) {
      console.error("Error fetching enquiry details:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFollowUpMessage((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const createFollowUpMessage = async () => {
    try {
      const res = await axios.post(`${API_URL}/user/follow-up-actions`, followUpMessage, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setFollowUpMessage(res.data);
      // Optional: Reset form fields or show success message
      setFollowUpMessage('')
    } catch (error) {
      console.error("Error creating follow-up message:", error);
      // Optional: Set an error state to display a user-friendly message
    }
  };
  

  useEffect(() => {
    getEnq();
  }, []);

  if (!getEnqById) {
    return <Spinner animation="border" variant="primary" />;
  }

  console.log(followUpMessage)

  return (
    <div className="enquiry-container">
      <div className='header-main'>
        <div className='question-and-details'>
          <div className='question'>{getEnqById.question || "Loading question..."}</div>
          <div className='author'>
            Written by a Rework academy staff, Updated on { new Date(getEnqById.createdAt).toLocaleString() || "date not available"}
          </div>
        </div>
        <div className="dropdown-enq">
          <div className="dropbtn-enq">
            <SlOptionsVertical size={20} style={{ color: 'black' }} />
          </div>
          <div className="dropdown-content">
            <button onClick={handleShow}>Create Enquiry</button>
            <button onClick={handleUpdateShow}>Update status</button>
            <button onClick={handleActionShow}>Update action</button>
            <button className='delete' onClick={handleDeleteShow}>Delete Enquiry</button>
          </div>
        </div>
      </div>
      <div className='description'>Description</div>
      <div className='description-details'>{getEnqById.description || "No description available"}</div>
      <div className='staff-and-customer'>
        <div className='staff'>
          <div className='staff-and-customer-header'>Current Staff Details</div>
          <div className='details'>
            <div className='staff-and-customer-details'>
              <div className='tag'>Name:</div>
              <div className='value'>{getEnqById.assignedStaff?.name || "N/A"}</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>Email:</div>
              <div className='value'>{getEnqById.assignedStaff?.email || "N/A"}</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>Phone:</div>
              <div className='value'>{getEnqById.assignedStaff?.phone || "N/A"}</div>
            </div>
          </div>
        </div>

        <div className='customer'>
          <div className='staff-and-customer-header'>Customer Details</div>
          <div className='details'>
            <div className='staff-and-customer-details'>
              <div className='tag'>name:</div>
              <div className='value'>{getEnqById.customerDetails?.name || "N/A"}</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>email</div>
              <div className='value'>{getEnqById.customerDetails?.email || "N/A"}</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>phone:</div>
              <div className='value'>{getEnqById.customerDetails?.phone || "N/A"}</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>session:</div>
              <div className='value'>{getEnqById.customerDetails?.session || "N/A"}</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>interest courses:</div>
              <div className='value'>{getEnqById.customerDetails?.course || "N/A"}</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>marketing source:</div>
              <div className='value'>{getEnqById?.source || "N/A"}</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>address:</div>
              <div className='value'>{getEnqById.customerDetails?.address || "N/A"}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='follow-up'>Follow up message</div>
      <div className='form-area'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="input..." className='input' name='actionTaken' value={followUpMessage.actionTaken} onChange={handleInputChange} />
            <Button variant="primary" type="submit" className='follow-up-btn'>
             Send
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div className='progress-and-message'>
        <ListGroup>
          <div className='item-div'>
            <ListGroup.Item className='list-item'>
            <img className='list-items-img' src='https://images.pexels.com/photos/28570315/pexels-photo-28570315.jpeg?cs=srgb&dl=pexels-lvu-image-1599405908-28570315.jpg&fm=jpg&_gl=1*1fupe55*_ga*MTA3MjkwNDE2My4xNzA5OTEwNjE3*_ga_8JE65Q40S6*MTcyODg0MjcxMS4xNS4xLjE3Mjg4NDMxNTYuMC4wLjA.'/>
              <div className='middle'>
                <div className='list-item-name'>Diana Floss - Admin</div>
                <div className='list-item-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus unde fugiat delectus doloremque error!</div>
              </div>
              <div>
                <div className='list-item-date'>23-09-2024</div>
                <div className='time'>04:09 PM</div>
              </div>
            </ListGroup.Item>
          </div>
          <div className='item-div'>
            <ListGroup.Item className='list-item'>
            <img className='list-items-img' src='https://images.pexels.com/photos/28570315/pexels-photo-28570315.jpeg?cs=srgb&dl=pexels-lvu-image-1599405908-28570315.jpg&fm=jpg&_gl=1*1fupe55*_ga*MTA3MjkwNDE2My4xNzA5OTEwNjE3*_ga_8JE65Q40S6*MTcyODg0MjcxMS4xNS4xLjE3Mjg4NDMxNTYuMC4wLjA.'/>
            <div className='middle'>
                <div className='list-item-name'>Diana Floss - Admin</div>
                <div className='list-item-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus unde fugiat delectus doloremque error!</div>
              </div>
              <div>
              <div className='list-item-date'>23-09-2024</div>
              <div className='time'>04:09 PM</div>
              </div>
            </ListGroup.Item>
          </div>
          <div className='item-div'>
            <ListGroup.Item className='list-item'>
            <img className='list-items-img' src='https://images.pexels.com/photos/28570315/pexels-photo-28570315.jpeg?cs=srgb&dl=pexels-lvu-image-1599405908-28570315.jpg&fm=jpg&_gl=1*1fupe55*_ga*MTA3MjkwNDE2My4xNzA5OTEwNjE3*_ga_8JE65Q40S6*MTcyODg0MjcxMS4xNS4xLjE3Mjg4NDMxNTYuMC4wLjA.'/>
            <div className='middle'>
                <div className='list-item-name'>Diana Floss - Admin</div>
                <div className='list-item-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus unde fugiat delectus doloremque error!</div>
              </div>
              <div>
              <div className='list-item-date'>23-09-2024</div>
              <div className='time'>04:09 PM</div>
              </div>
            </ListGroup.Item>
          </div>   
           </ListGroup>

        <div className="tracking">
        <ProgressBar now={now} label={`${now}%`} className='status-bar' />
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
                <Form.Group md="4" controlId="validationCustom01">
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

                <Form.Group md="4" controlId="validationCustom01">
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
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="email"
                    defaultValue="xyz@rework.com"
                  />
                </Form.Group>

                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>phone</Form.Label>
                  <Form.Control
                    required
                    type="tel"
                    placeholder="+234"
                    defaultValue="+234"
                  />
                </Form.Group>

                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>Course (optional)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                  />
                </Form.Group>

                <Form.Group md="4" controlId="validationCustom01">
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

      <Modal show={showAction} className='modal-main'>
        <Form>
          <Modal.Header>
            <Modal.Title>Add follow-up action</Modal.Title>
          </Modal.Header>
          <Modal.Body className='update-form-body'>
            <div className='update-form'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Select user</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Action taken</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="type text here"
                  style={{ height: '100px' }}
                />
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer className='modal-footer'>
            <Button variant="primary" >
              save
            </Button>
            <Button variant="danger" onClick={handleActionClose}>cancel</Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showUpdate} className='modal-main'>
        <Form>
          <Modal.Header>
            <Modal.Title>Update status</Modal.Title>
          </Modal.Header>
          <Modal.Body className='update-form-body'>
            <div className='update-form'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Select Action</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option></option>
                  <option value="1">New</option>
                  <option value="2">In-progress</option>
                  <option value="3">Enrolled</option>
                </Form.Select>
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer className='modal-footer'>
            <Button variant="primary" >
              save
            </Button>
            <Button variant="danger" onClick={handleUpdateClose}>cancel</Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showDelete} className='modal-main'>
        <Form>
          <Modal.Header>
            <Modal.Title>Update status</Modal.Title>
          </Modal.Header>
          <Modal.Body className='update-form-body'>
            <div>Are you sure you want to delete this enquiry?</div>
          </Modal.Body>
          <Modal.Footer className='modal-footer'>
            <Button variant="primary" >
              save
            </Button>
            <Button variant="danger" onClick={handleDeleteClose}>cancel</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default EnquiryDetails

