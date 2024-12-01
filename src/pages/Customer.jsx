import React, { useEffect, useState } from "react";
import { LuUsers } from "react-icons/lu";
import Table from "react-bootstrap/Table";
import "../assets/styles/pages/customer.css";
import { API_URL } from "../config";
import axios from "axios";

const Customer = () => {
  const [getAllEnq, setAllEnq] = useState([]);
  const token = sessionStorage.getItem("authToken");

  const getAllEnquiries = async () => {
    const res = await axios.get(`${API_URL}/user/enquiries`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (Array.isArray(res.data.data)) {
      setAllEnq(res.data.data);
    }
  };

  useEffect(() => {
    getAllEnquiries();
  }, []);

  return (
    <div className="followup-container">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          paddingRight: "5px",
          marginBottom: "20px",
        }}
      >
        <div>All {getAllEnq.length}</div>
      </div>
      <div className="table-container">
        <Table className="table">
          <thead
            style={{
              border: "1px solid black",
              borderRadius: "5px 0px 5px 0px",
            }}
          >
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Sessions</th>
              <th>Interested courses</th>
              <th>Marketing source</th>
            </tr>
          </thead>
          <tbody>
            {getAllEnq.map((student, index) => (
              <tr key={`${student?.customerDetails?.name}-${index}`}>
                <td >
                  {student?.customerDetails?.name}
                </td>
                <td>{student?.customerDetails.email}</td>
                <td>{student?.customerDetails?.phone}</td>
                <td>{student?.customerDetails?.address}</td>
                <td>{student?.customerDetails?.session}</td>
                <td>{student?.customerDetails?.course}</td>
                <td>{student?.source}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Customer;
