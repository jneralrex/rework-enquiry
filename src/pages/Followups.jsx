import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import '../assets/styles/pages/followup.css'
import axios from "axios";
import { API_URL } from "../config";

const Followups = () => {
  const [getAllFollow, setAllFollow] = useState([]);
  const token = sessionStorage.getItem('authToken');

  const getAllFollowUps = async () => {
    try {
      const res = await axios.get(`${API_URL}/user/follow-up-actions`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (Array.isArray(res.data.data)) {
        setAllFollow(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching follow-up actions:", error);
    }
  };

  useEffect(() => {
    getAllFollowUps();
  }, []);

  return (
    <div className="followup-container">
      <div className="table-container">
        <Table bordered className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Current Actions</th>
              <th>Assigned Staff</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {getAllFollow.length === 0 ? (
              <tr>
                <td colSpan="7">No follow-ups available.</td>
              </tr>
            ) : (
              getAllFollow.map((followDetails) => (
                <tr key={followDetails._id}>
                  <td>{followDetails?.enquiry?.customerDetails?.name}</td>
                  <td>{followDetails?.enquiry?.customerDetails?.email || 'N/A'}</td>
                  <td>{followDetails?.enquiry?.status}</td>
                  <td>
                    {Array.isArray(followDetails?.enquiry?.followUpActions) 
                      ? followDetails.enquiry.followUpActions.join(', ') 
                      : 'N/A'}
                  </td>
                  <td>{followDetails?.currentStaff?.name || 'N/A'}</td>
                  <td>{new Date(followDetails?.enquiry?.createdAt).toLocaleString()}</td>
                  <td>
                    <Dropdown className="table-drop-down">
                      <Dropdown.Toggle variant="success" id="dropdown-basic" className="table-drop-down-title">
                        View
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="drop-down-menu">
                        <Dropdown.Item href="#/action-1">View all enquiries</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Followups;
