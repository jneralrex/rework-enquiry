import React, { useState } from 'react'
import { FiBell, FiPlus, FiArrowRight, FiSearch, FiTrash } from 'react-icons/fi'
import { LuUsers } from 'react-icons/lu';
import { IoSearchOutline } from "react-icons/io5";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';


const Customer = () => {
  const studentsData = Array(50).fill(null).map((_, idx) => ({
    name: "Adndew Jones",
    email: "idahrex@gmail.com",
    phone: "08175225016",
    address: "masaka, masaka",
    session: "2021/2022",
    interestedCourse: "Data Anaysis",
    marketingSource: "",
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
    <div className="followup-container">
      <div className="enquiry-header">
        <div className="enquiry-header-left">
          <div className="header-title">Follow-ups</div>
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
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', paddingRight: '5px', marginBottom: '20px' }}>
        <div>All (100)</div>
        <div className='' style={{ display: 'flex', gap: '8px', width: '40%', }}>
          <div style={{ border: '1px solid gray', display: 'flex', alignItems: 'center', padding: '6px', borderRadius: '10px' }}>
            <input type="text" placeholder='search' style={{ border: 'none', }} />
            <IoSearchOutline />
          </div>
          <button style={{ padding: '6px', display: 'flex', alignItems: 'center', borderRadius: '5px', backgroundColor: '#00afef', border: 'none', color: 'white' }}>
            <FiPlus />
            Add New
          </button>
          <button style={{ padding: '6px', display: 'flex', alignItems: 'center', borderRadius: '5px', backgroundColor: '#ff8a8a', border: 'none', color: 'white' }}>
            <FiTrash />
            Delete
          </button>
        </div>
      </div>

      <Table className="table">
        <thead style={{ border: '1px solid black', borderRadius: '5px 0px 5px 0px' }}>
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
          {displayedData.map((student, idx) => (
            <tr key={idx}>
              <td style={{ display: 'flex ', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}> <Form>
                {['checkbox',].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />

                  </div>
                ))}
              </Form>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.address}</td>
              <td>{student.session}</td>
              <td>{student.interestedCourse}</td>
              <td>{student.marketingSource}</td>
              <td>

              </td>
            </tr>
          ))}
        </tbody>
      </Table>

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
  )
}

export default Customer