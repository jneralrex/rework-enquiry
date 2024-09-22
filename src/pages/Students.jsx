import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from "react-bootstrap/Card";
import { LuUsers } from "react-icons/lu";
import { FiBell, FiSearch, FiPlus, FiFilter, FiArrowRight } from "react-icons/fi";
import { CiExport } from "react-icons/ci";
import '../assets/styles/pages/allenquiries.css';

const Students = () => {
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

  return (
    <div className="container">
      <div className="header-container">
        <div className="header-left">
          <div style={{ fontWeight: "700", fontSize: "20px" }}>All Enquiries</div>
          <div className="icon-group">
            <div><FiSearch /></div>
            <div><FiBell /></div>
          </div>
        </div>
        <div className="header-right">
          <div>Jones Ferdinand</div>
          <div><LuUsers /></div>
        </div>
      </div>
    
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
        <div className="custom-button">
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
              <td>{student.source}</td>
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

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <div className="next-page-pointer">
          <div>Next</div>
          <div><FiArrowRight/></div>
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
    </div>
  );
};

export default Students;
