import React, { useState } from 'react'
import { FiBell, FiSearch } from 'react-icons/fi'
import { LuUsers } from 'react-icons/lu'
import '../assets/styles/pages/enquiriesdetails.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';




const EnquiryDetails = () => {
  const [show, setShow] = useState(false);
  const [showUpdate, setUpdateShow] = useState(false);
  const [showAction, setActionShow] = useState(false);
  const [showDelete, setDeleteShow] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdateClose = () => setUpdateShow(false);
  const handleUpdateShow = () => setUpdateShow(true);

  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);

  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);


  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  return (
    <div className="enquiry-container">
      <div className="enquiry-header">
        <div className="enquiry-header-left">
          <div className="header-title">Enquiry Details</div>
          <div className="header-icons">
            <div><FiSearch /></div>
            <div><FiBell /></div>
          </div>
        </div>
        <div className="enquiry-header-right">
          <div>Jones Ferdinand</div>
          <div><LuUsers /></div>
        </div>
      </div>
      <div className='header-main'>
        <div className='question-and-details'>
          <div className='question'>What is Full-Stack Development</div>
          <div className='author'>Written by a Rework academy staff, Updated on july 26, 2024</div>
        </div>
        <div className='actions-btns'>
          <button onClick={handleShow}>Create Enquiry</button><button onClick={handleUpdateShow}>Update status</button><button onClick={handleActionShow}>Update action</button><button className='delete' onClick={handleDeleteShow}>Delete Enquiry</button>
        </div>
      </div>
      <div className='description'>Description</div>
      <div className='description-details'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consectetur sequi vitae repellendus in laborum perferendis vel quae, eum, molestias nulla similique placeat dolorum. Quae eos iusto ipsam, provident dolores nostrum, placeat modi corrupti laudantium necessitatibus hic. Non saepe quibusdam, numquam qui earum beatae culpa quia tenetur, amet optio repellat, ipsam quae maiores. Quis, eligendi. Consectetur beatae distinctio ea error neque, vel nulla dolorum non. Placeat odit veniam, velit molestias excepturi exercitationem quisquam ducimus odio id! Ullam beatae, necessitatibus ad facere delectus voluptatum ea quia, laborum dolore, iste nobis sed quam reiciendis in eaque architecto dolor? Ex id sit culpa eos recusandae ea eum, minima nobis consequatur quibusdam vel, autem quis, sunt ducimus voluptas animi! Suscipit in id rerum quos, quidem aliquam animi eaque eius porro, modi explicabo odio exercitationem excepturi velit dolorum! Repudiandae, eum sequi. Facilis, praesentium. Possimus debitis accusantium sit. Aperiam voluptatibus tempora, reiciendis nisi provident delectus ipsum!
      </div>
      <div className='staff-and-customer'>
        <div>
          <div className='staff-and-customer-header'>Current Staff Details</div>
          <div className='details'>
            <div className='staff-and-customer-details'>
              <div className='tag'>name:</div>
              <div className='value'>Lydia Jonathan</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>email:</div>
              <div className='value'>lyjones@gmail.com</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>phone:</div>
              <div className='value'>08175304512</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>address:</div>
              <div className='value'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ducimus?</div>
            </div>
          </div>
        </div>
        <div>
          <div className='staff-and-customer-header'>Current Staff Details</div>
          <div className='details'>
            <div className='staff-and-customer-details'>
              <div className='tag'>name:</div>
              <div className='value'>Samuel Kings Garba</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>email:</div>
              <div className='value'>samuelkingsgarba@gmail.com</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>phone:</div>
              <div className='value'>08175225016</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>address:</div>
              <div className='value'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex provident explicabo ipsum odit libero veniam tempora unde enim sit optio.</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>session:</div>
              <div className='value'>2023/2024</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>interest courses:</div>
              <div className='value'>Lydia Jonathan</div>
            </div>
            <div className='staff-and-customer-details'>
              <div className='tag'>marketing source:</div>
              <div className='value'>Lydia Jonathan</div>
            </div>
          </div>
        </div>
      </div>
      <div className='follow-up'>Follow up message</div>
      <div className='form-area'>
        <Form>
          <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="input..." className='input' />
            <Button variant="primary" type="submit" className='follow-up-btn' style={{ width: '', height: '48px', backgroundColor: '#00afef', }}>
              <Link to='/drawer/dashboard' style={{ color: 'black', textDecoration: 'none', fontWeight: '700' }}> Send</Link>
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div className='progress-and-message'>
        <div className='message-box'>
          <div className="message-header">
            <div className='header'>Current staff</div>
            <div className='header'>Follow up message</div>
          </div>
          <div className="message-body">
            <div className='message-details'>Sam Adahi</div>
            <div className='message-details'>Lorem ipsum dolor sit amet.</div>

          </div>
          <div className="message-body">
            <div className='message-details'>Emmanuuel Ajimobi</div>
            <div className='message-details'>Lorem ipsum dolor sit amet.</div>
          </div>
          <div className="message-body">
            <div className='message-details'>Juliet Bigtin</div>
            <div className='message-details'>Lorem ipsum dolor sit amet.</div>
          </div>
          <div className="message-body">
            <div className='message-details'>Juliet Bigtin</div>
            <div className='message-details'>Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
        <div className="tracking">
          <div className='header'>Tracking</div>
          <div className="tracker">
            <div className='current-progress'>Enrolled</div>
            <div className='date'>1/02/2024</div>
          </div>
          <div className="tracker">
            <div className='current-progress'>Opt-out</div>
            <div className='date'>1/02/2024</div>
          </div>
          <div className=" tracker">
            <div className='current-progress'>Opt-out</div>
            <div className='date'>1/02/2024</div>
          </div>
          <div className=" tracker">
            <div className='current-progress'>Opt-out</div>
            <div className='date'>1/02/2024</div>
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

