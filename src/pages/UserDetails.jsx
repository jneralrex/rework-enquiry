import React, { useState } from "react";
import "../assets/styles/pages/userdetails.css";
import { FiBell, FiSearch, FiEdit, FiTrash } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { TfiTrash } from "react-icons/tfi";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';



const UserDetails = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="details-con">
            <div className="header-container">
                <div className="header-left">
                    <div className="title">User Details</div>
                    <div className="icon-group">
                        <div>
                            <FiSearch />
                        </div>
                        <div>
                            <FiBell />
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <div>Jones Ferdinand</div>
                    <div>
                        <LuUsers />
                    </div>
                </div>
            </div>
            <div className="details-grid">
                <Container className="details-container">
                    <div className="details-content">
                        <div className="details-header">
                            <Image
                                src="https://images.pexels.com/photos/28497015/pexels-photo-28497015/free-photo-of-fashionable-woman-in-stylish-skirt-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                roundedCircle
                                className="profile-image"
                            />
                            <div>
                                <div className="profile-name">Andrea Barns</div>
                                <div className="profile-role">Full stack developer</div>
                            </div>
                        </div>
                        <div className="details-body">
                            <div className="details-section">
                                <div className="label">Name</div>
                                <div className="value">Andrea Barns</div>
                            </div>
                            <div className="details-section">
                                <div className="label">Role</div>
                                <div className="value">Student: Full stack development</div>
                            </div>
                            <div className="details-section">
                                <div className="label">Email</div>
                                <div className="value">andrea@gmail.com</div>
                            </div>
                            <div className="details-section">
                                <div className="label">Phone</div>
                                <div className="value">+2349085674552</div>
                            </div>
                            <div className="details-section">
                                <div className="label">Created At</div>
                                <div className="value">July 2nd. 09:34am</div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container className="action-container">
                    <div className="action-content">
                        <div className="action-item" onClick={handleShow}>
                            <FiEdit size={30} />
                            <div>Edit</div>
                        </div>
                        <div className="action-item">
                            <Form>
                                <Form.Check type="switch" id="custom-switch" size={20} />
                            </Form>
                            <div>Change Role</div>
                        </div>
                        <div className="action-item delete-item">
                            <TfiTrash size={30} />
                            <div>Delete</div>
                        </div>
                    </div>
                </Container>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}

            >
                <div className="modal-header">
                    <Image
                        src="https://images.pexels.com/photos/28497015/pexels-photo-28497015/free-photo-of-fashionable-woman-in-stylish-skirt-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        roundedCircle
                        className="profile-image"
                    />
                    <div>
                        <div className="profile-name">Andrea Barns</div>
                        <div className="profile-role">andreabarns@gmail.com</div>
                    </div>
                </div>
                <div className='edit-form'>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label>name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="name"
                                    defaultValue=""
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" as={Col} controlId="formBasicEmail">
                                <Form.Label>Role</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="validationCustom03">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Email" required />
                            </Form.Group>

                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder=""
                                    defaultValue=""
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label>phone</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder=""
                                    defaultValue=""
                                />
                            </Form.Group>
                        </Row>
                        <Modal.Footer className='edit-modal-footer'>
                            <Button variant="" className="delete-btn">
                               <FiTrash/> Delete user
                            </Button>
                            <div className="btns">
                                <Button variant="primary" >
                                    save
                                </Button>
                                <Button variant="danger" onClick={handleClose}>cancel</Button>
                            </div>
                        </Modal.Footer>
                    </Form>
                </div>
            </Modal>
        </div>
    );
};

export default UserDetails;
