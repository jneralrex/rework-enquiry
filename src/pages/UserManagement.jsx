import React, { useState } from 'react';
import { FiBell, FiPlus, FiArrowRight, FiSearch } from 'react-icons/fi';
import { LuUsers } from 'react-icons/lu';
import { IoSearchOutline } from "react-icons/io5";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import '../assets/styles/pages/usermanagement.css';  // Assuming this is the correct path for your CSS file

const UserManagement = () => {
  const studentsData = Array(50).fill(null).map((_, idx) => ({
    name: "Andrea James",
    role: "",
    email: "idahrex@gmail.com",
    createdAt: "22/24/2023",
    action: "",
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
    <div className="con">
      <div className="header-container">
        <div className="header-left">
          <div className="title">All Enquiries</div>
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

      <div className="search-and-add">
        <div>All (100)</div>
        <div className="search-add-group">
          <div className="search-box">
            <input type="text" placeholder='search' />
            <IoSearchOutline />
          </div>
          <button className="add-new-button">
            <FiPlus />
            Add New
          </button>
        </div>
      </div>

      <div className="table-container">
        <Table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((student, idx) => (
              <tr key={idx}>
                <td className='flex-td'>
                  <Form>
                    <Form.Check inline name="group1" type="checkbox" id={`inline-checkbox-${idx}`} />
                  </Form>
                  {student.name}
                </td>
                <td>{student.role}</td>
                <td>{student.email}</td>
                <td>{student.createdAt}</td>
                <td>{student.action}</td>
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
    </div>
  );
}

export default UserManagement;
