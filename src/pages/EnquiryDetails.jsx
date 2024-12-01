import React, { useEffect, useState } from "react";
import "../assets/styles/pages/enquiriesdetails.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ListGroup from "react-bootstrap/ListGroup";
import { SlOptionsVertical } from "react-icons/sl";
// import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from "axios";
import { API_URL } from "../config";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const EnquiryDetails = () => {
  const { encodedId } = useParams();
  const realId = atob(encodedId);
  const token = sessionStorage.getItem("authToken");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showUpdate, setUpdateShow] = useState(false);
  const [showAction, setActionShow] = useState(false);
  const [showDelete, setDeleteShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [getEnqById, setGetEnqById] = useState(null);
  const [error, setError] = useState("");
  const [getAllStaff, setAllStaff] = useState([]);
  const [allFollowUpById, setAllFollowUpById] = useState([]);

  const [deleteEnq, setDeleteEnq] = useState({ id: realId });
  const userID = useSelector((state) => state.user?.user?.user?._id);

  //I am splitting slash / from the current date and I am replacing it with dash - :
  const formatDateWithDashes = (date = new Date()) => {
    return date.toLocaleDateString("en-GB").split("/").join("-");
  };

  //I am rendering date to the format that is accepted by the API:
  const formattedDateWithDashes = formatDateWithDashes();

  const [followUpMessage, setFollowUpMessage] = useState({
    enquiry: realId,
    date: formattedDateWithDashes,
    actionTaken: "",
    currentStaff: userID,
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
      createFollowUpMessage();
    } else {
      setValidated(true);
    }
  };

  const [createEnq, setCreatedEnq] = useState({
    source: "",
    description: "",
    assignedStaff: "",
    status: "",
    followUpActions: [],
    customerDetails: {
      name: "",
      email: "",
      address: "",
      phone: "",
      course: "",
      quarter: "",
      session: "",
    },
  });
  const sources = [
    "Email",
    "Phone",
    "Social Media",
    "Physical Walk-in",
    "WhatsApp",
    "Indirect Referral",
  ];

  const status = ["New", "Enrolled", "Closed", "Opt-Out", "In Progress"];

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
        Authorization: `Bearer ${token}`,
      },
    });

    if (Array.isArray(res.data.data)) {
      setAllStaff(res.data.data);
    }
  };

  const getAllFollowUpById = async () => {
    const res = await axios.get(
      `${API_URL}/user/follow-up-actions/enquiry/${realId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (Array.isArray(res.data.data)) {
      setAllFollowUpById(res.data.data);
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
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    if (!createEnq.status) {
      setError("Please select a status for the enquiry.");
      return;
    }
    try {
      const res = await axios.post(`${API_URL}/user/enquiries`, createEnq, {
        headers,
      });
      alert("hi");
      handleClose();
      getAllEnquiries();
    } catch (error) {
      console.error("Error creating enquiry:", error);
    }
  };

  const getEnq = async () => {
    try {
      const res = await axios.get(`${API_URL}/user/enquiries/${realId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGetEnqById(res.data.data);
    } catch (error) {
      console.error("Error fetching enquiry details:", error);
    }
  };

  const handleInputFollowUpChange = (e) => {
    const { name, value } = e.target;
    setFollowUpMessage((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  const createFollowUpMessage = async () => {
    try {
      const res = await axios.post(
        `${API_URL}/user/follow-up-actions`,
        followUpMessage,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setFollowUpMessage({
        enquiry: realId,
        date: formattedDateWithDashes,
        actionTaken: "", // Reset to an empty string
        currentStaff: userID,
      }); // Reset state correctly to the initial structure
    } catch (error) {
      console.error("Error creating follow-up message:", error);
    }
  };

  const deleteEnquiry = async () => {
    try {
      const res = axios.delete(`${API_URL}/user/delete/${realId}`, deleteEnq, {
        headers: {
          Authorization: {
            Bearer: `${token}`,
          },
        },
      });
      setDeleteEnq({ id: "" });
      alert("deleted");
      handleDeleteClose();
    } catch (error) {
      setError(error);
      alert("Error deleting enquiry: " + error.message);
    }
  };

  useEffect(() => {
    getEnq();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([getAllStaffDetails(), getAllFollowUpById()]);
      setLoading(false);
    };
    fetchData();
  }, [followUpMessage]);

  if (!getEnqById) {
    return <Spinner animation="border" variant="primary" />;
  }

  console.log("follow", allFollowUpById);
  console.log(followUpMessage);

  return (
    <div className="enquiry-container">
      <div className="header-main">
        <div className="dropdown-enq">
          <div className="dropbtn-enq">
            <SlOptionsVertical size={20} style={{ color: "black" }} />
          </div>
          <div className="dropdown-content">
            <button onClick={handleShow}>Create Enquiry</button>
            <button onClick={handleUpdateShow}>Update status</button>
            <button onClick={handleActionShow}>Update action</button>
            <button className="delete" onClick={handleDeleteShow}>
              Delete Enquiry
            </button>
          </div>
        </div>
      </div>
      <div className="description">Description</div>
      <div className="description-details">
        {getEnqById.description || "No description available"}
      </div>
      <div className="staff-and-customer">
        <div className="staff">
          <div className="staff-header">Current Staff Details</div>
          <div className="details">
            <div className="staff-and-customer-details">
              <div className="tag">Name:</div>
              <div className="value">
                {getEnqById.assignedStaff?.name || "N/A"}
              </div>
            </div>
            <div className="staff-and-customer-details">
              <div className="tag">Email:</div>
              <div className="value">
                {getEnqById.assignedStaff?.email || "N/A"}
              </div>
            </div>
            <div className="staff-and-customer-details">
              <div className="tag">Phone:</div>
              <div className="value">
                {getEnqById.assignedStaff?.phone || "N/A"}
              </div>
            </div>
          </div>
        </div>

        <div className="customer">
          <div className="customer-header">Customer Details</div>
          <div className="details">
            <div className="staff-and-customer-details">
              <div className="tag">name:</div>
              <div className="value">
                {getEnqById.customerDetails?.name || "N/A"}
              </div>
            </div>
            <div className="staff-and-customer-details">
              <div className="tag">email</div>
              <div className="value">
                {getEnqById.customerDetails?.email || "N/A"}
              </div>
            </div>
            <div className="staff-and-customer-details">
              <div className="tag">phone:</div>
              <div className="value">
                {getEnqById.customerDetails?.phone || "N/A"}
              </div>
            </div>
            <div className="staff-and-customer-details">
              <div className="tag">session:</div>
              <div className="value">
                {getEnqById.customerDetails?.session || "N/A"}
              </div>
            </div>
            <div className="staff-and-customer-details">
              <div className="tag">interest courses:</div>
              <div className="value">
                {getEnqById.customerDetails?.course || "N/A"}
              </div>
            </div>
            <div className="staff-and-customer-details">
              <div className="tag">marketing source:</div>
              <div className="value">{getEnqById?.source || "N/A"}</div>
            </div>
            <div className="staff-and-customer-details">
              <div className="tag">address:</div>
              <div className="value">
                {getEnqById.customerDetails?.address || "N/A"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="follow-up">Follow up message</div>
      <div className="form-area">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="message..."
              className="input"
              name="actionTaken"
              value={followUpMessage.actionTaken || ""} // Ensure value is a string
              onChange={handleInputFollowUpChange}
            />
            <Button variant="primary" type="submit" className="follow-up-btn">
              Send
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div className="progress-and-message">
        <div className="message-holder">
          {allFollowUpById && allFollowUpById.length > 0 ? (
            allFollowUpById.map((followUp) => (
              <div className="item-div" key={followUp._id}>
                {" "}
                {/* Add unique key */}
                <div className="list-item">
                  <div className="middle">
                    <div className="middle-item">
                      <div className="list-item-name">
                        {followUp?.currentStaff?.name} -{" "}
                        {followUp?.currentStaff?.role.name}
                      </div>
                      <div className="list-item-date">
                        {followUp?.date
                          ? new Date(followUp?.date).toLocaleDateString("en-GB")
                          : "No Date Available"}
                      </div>
                    </div>
                    <div className="list-item-msg">{followUp?.actionTaken}</div>
                  </div>
                  <div></div>
                </div>
              </div>
            ))
          ) : (
            <div>No Follow Up Action yet</div>
          )}
        </div>

        <div className="tracking">
          <div
            style={{
              backgroundColor:
                getEnqById?.status === "New" ? "#0d6efd" : "transparent",
              color: getEnqById?.status === "New" ? "white" : "grey",
            }}
          >
            New
          </div>
          <div
            style={{
              backgroundColor:
                getEnqById?.status === "In Progress"
                  ? "#0d6efd"
                  : "transparent",
              color: getEnqById?.status === "In Progress" ? "white" : "grey",
            }}
          >
            In Progress
          </div>
          <div
            style={{
              backgroundColor:
                getEnqById?.status === "Enrolled" ? "#0d6efd" : "transparent",
              color: getEnqById?.status === "Enrolled" ? "white" : "grey",
            }}
          >
            Enrolled
          </div>
          <div
            style={{
              backgroundColor:
                getEnqById?.status === "Opt-Out" ? "#0d6efd" : "transparent",
              color: getEnqById?.status === "Opt-Out" ? "white" : "grey",
            }}
          >
            Opt-Out
          </div>
          <div
            style={{
              backgroundColor:
                getEnqById?.status === "Closed" ? "#0d6efd" : "transparent",
              color: getEnqById?.status === "Closed" ? "white" : "grey",
            }}
          >
            Closed
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
          <Modal.Body>
            <div className="modal-form">
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Source</Form.Label>
                  <Form.Select
                    name="source"
                    value={createEnq.source}
                    onChange={handleInputChange}
                  >
                    <option value=""></option>
                    {sources.map((source, index) => (
                      <option key={index} value={source}>
                        {source}
                      </option>
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
                    style={{ height: "100px" }}
                  />
                </Form.Group>
                <div></div>
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
                    {getAllStaff &&
                      getAllStaff.map((staff) => (
                        <option key={staff.id} value={staff._id}>
                          {staff.name}
                        </option>
                      ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Follow-up action</Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="">
                    <Form.Control
                      as="textarea"
                      value={createEnq.followUpActions.join(", ")}
                      onChange={(e) =>
                        setCreatedEnq({
                          ...createEnq,
                          followUpActions: e.target.value.split(", "),
                        })
                      }
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <div></div>
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
                checked={createEnq.status === "New"}
                onChange={handleStatusChange}
              />
              <Form.Check
                inline
                label="In Progress"
                name="status"
                type="radio"
                id="inline-radio-2"
                value="In Progress"
                checked={createEnq.status === "In Progress"}
                onChange={handleStatusChange}
              />
              <Form.Check
                inline
                label="Enrolled"
                name="status"
                type="radio"
                id="inline-radio-3"
                value="Enrolled"
                checked={createEnq.status === "Enrolled"}
                onChange={handleStatusChange}
              />
              <Form.Check
                inline
                label="Opt-out"
                name="status"
                type="radio"
                id="inline-radio-4"
                value="Opt-Out"
                checked={createEnq.status === "Opt-Out"}
                onChange={handleStatusChange}
              />
              <Form.Check
                inline
                label="Closed"
                name="status"
                type="radio"
                id="inline-radio-4"
                value="Closed"
                checked={createEnq.status === "Closed"}
                onChange={handleStatusChange}
              />
            </div>
            <div className="modal-form">
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
                    style={{ height: "100px" }}
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
                <div></div>
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
                <div></div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="primary" onClick={createEnquiries}>
              save
            </Button>
            <Button variant="danger" onClick={handleClose}>
              cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showAction} className="modal-main">
        <Form>
          <Modal.Header>
            <Modal.Title>Add follow-up action</Modal.Title>
          </Modal.Header>
          <Modal.Body className="update-form-body">
            <div className="update-form">
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
                  style={{ height: "100px" }}
                />
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="primary">save</Button>
            <Button variant="danger" onClick={handleActionClose}>
              cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showUpdate} className="modal-main">
        <Form>
          <Modal.Header>
            <Modal.Title>Update status</Modal.Title>
          </Modal.Header>
          <Modal.Body className="update-form-body">
            <div className="update-form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Select Action</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value=""></option>
                  {status &&
                    status.map((status, index) => (
                      <option key={index} value={status}>
                        {status}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="primary">save</Button>
            <Button variant="danger" onClick={handleUpdateClose}>
              cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showDelete} className="modal-main">
        <Form>
          <Modal.Header>
            <Modal.Title>Update status</Modal.Title>
          </Modal.Header>
          <Modal.Body className="update-form-body">
            <div>Are you sure you want to delete this enquiry?</div>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="primary" onClick={deleteEnquiry}>
              Delete
            </Button>
            <Button variant="danger" onClick={handleDeleteClose}>
              cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default EnquiryDetails;
