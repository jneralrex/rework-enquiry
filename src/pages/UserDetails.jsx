import React, { useEffect, useState } from "react";
import "../assets/styles/pages/userdetails.css";
import { FiEdit, FiTrash } from "react-icons/fi";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import { API_URL } from "../config";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const UserDetails = () => {
    const token = sessionStorage.getItem('authToken');
    const { encodedId } = useParams();
    const realId = atob(encodedId);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const [getRoles, setGetRoles] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Fetch user details by ID
    const getUser = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${API_URL}/user/user/${realId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.data && res.data.data) {
                setUserDetails(res.data.data);
            } else {
                setError("User not found.");
            }
        } catch (err) {
            setError("Failed to fetch user details.");
        }
        setLoading(false);
    };

    const getAllRoles = async () => {
        try {
            const res = await axios.get(`${API_URL}/user/roles`, { headers: { Authorization: `Bearer ${token}` } });
            if (Array.isArray(res.data.data)) {
                setGetRoles(res.data.data);
            }
        } catch (error) {
            setError(error);
        }
    };


    const handleUpdateUser = async () => {
        setLoading(true);
        try {
            const updatedData = {
                name: userDetails.name,
                role: userDetails.role?._id,
                email: userDetails.email,
                phone: userDetails.phone,
            };
    
            const res = await axios.put(`${API_URL}/user/user_update/${realId}`, updatedData, {
                headers: { Authorization: `Bearer ${token}` },
            });
    
            if (res.data && res.data.data) {
                setUserDetails(res.data.data); 
                setError(""); 
                handleClose(); 
                await getUser(); 
            } else {
                setError("Failed to update user details.");
            }
        } catch (err) {
            setError("Error updating user.");
        }
        setLoading(false);
    };
    
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await Promise.all([getUser(), getAllRoles()]);
        };
        fetchData();
    }, []);

    if (loading) return <div className="loading-spinner"><Spinner animation="border" variant="primary" /></div>;
    console.log(userDetails)
    return (
        <div className="details-con">
            <div className="details-grid">
                <Container className="details-container">
                    <div className="details-content">
                        {userDetails ? (
                            <>
                                <div className="details-header">
                                   
                                    <div className="details-inner">
                                        <div>
                                            <div className="profile-name">{userDetails.name}</div>
                                            <div className="profile-role">{userDetails?.role?.name}</div>
                                        </div>
                                        <div className="action-content">
                                            <div className="action-item" onClick={handleShow}>
                                                <FiEdit size={30} />
                                                <div>Edit</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="details-body">
                                    <div className="details-section">
                                        <div className="label">Name</div>
                                        <div className="value">{userDetails.name}</div>
                                    </div>
                                    <div className="details-section">
                                        <div className="label">Role</div>
                                        <div className="value">{userDetails?.role?.name}</div>
                                    </div>
                                    <div className="details-section">
                                        <div className="label">Email</div>
                                        <div className="value">{userDetails.email}</div>
                                    </div>
                                    <div className="details-section">
                                        <div className="label">Phone</div>
                                        <div className="value">{userDetails.phone}</div>
                                    </div>
                                    <div className="details-section">
                                        <div className="label">Created At</div>
                                        <div className="value">{new Date(userDetails?.createdAt).toLocaleString()}</div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="error-message">{error}</div>
                        )}
                    </div>
                </Container>
            </div>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <div>
                        <div className="profile-name">{userDetails?.name}</div>
                        <div className="profile-role">{userDetails?.role?.name}</div>
                    </div>
                </Modal.Header>

                <Form>
                    <div className="edit-form">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    value={userDetails?.name || ""}
                                    onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="validationCustom02">
                                <Form.Label>Role</Form.Label>
                                <Form.Select
                                    value={userDetails?.role?._id || ""}
                                    onChange={(e) => setUserDetails({ ...userDetails, role: { _id: e.target.value } })}
                                    required
                                >
                                    <option>Select Role</option>
                                    {getRoles.map(role => (
                                        <option key={role._id} value={role._id}>
                                            {role.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group controlId="validationCustom03">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={userDetails?.email}
                                    onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                    required
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationCustom04">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Phone"
                                    value={userDetails?.phone}
                                    onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                                    required
                                />
                            </Form.Group>
                        </Row>

                        <Modal.Footer className="edit-modal-footer">
                            <Button variant="danger" className="delete-btn text-white">
                                <FiTrash /> Delete User
                            </Button>
                            <div className="btns">
                                <Button variant="primary" onClick={handleUpdateUser}>Save</Button>
                                <Button variant="danger" onClick={handleClose}>Cancel</Button>
                            </div>
                        </Modal.Footer>
                    </div>
                </Form>
            </Modal>
        </div>
    );
};

export default UserDetails;