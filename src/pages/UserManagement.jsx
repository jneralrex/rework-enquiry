import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../config';
import '../assets/styles/pages/usermanagement.css';
import { FaEye } from 'react-icons/fa';

const UserManagement = () => {
  const token = sessionStorage.getItem('authToken');
  const [getAllUser, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 8;

  // Handling search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Filter data based on search query
  const filteredData = getAllUser.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getAllUserDetails = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/user/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (Array.isArray(res.data.data)) {
        setAllUsers(res.data.data);
      }
    } catch (error) {
      setError('Failed to load users. Please try again later.');
    }
    setLoading(false);
  };

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getAllUserDetails();
  }, []);

  return (
    <div className="con">
      <div className="search-and-add">
        <div>All ({filteredData.length})</div>
        <div className="search-add-group">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search name, email or role"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <IoSearchOutline className="search-icon" />
          </div>
          <button className="add-new-button">
            <FiPlus />
            <div>Add New</div>
          </button>
        </div>
      </div>

      <div className="table-container">
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
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
              {displayedData.map((user) => (
                <tr key={user._id}>
                  <td className="flex-td">
                    {/* <Form>
                      <Form.Check
                        inline
                        name="group1"
                        type="checkbox"
                        id={`inline-checkbox-${user._id}`}
                      />
                    </Form> */}
                    <div className="flex-td-div">
                      <Image
                        src={user.image || '/default-avatar.jpg'} // Fallback to default image
                        roundedCircle
                        className="student-image"
                      />
                      {user.name}
                    </div>
                  </td>
                  <td>{user.role.name}</td>
                  <td>{user.email}</td>
                  <td>{new Date(user.createdAt).toLocaleString()}</td>
                  <td>
                    <Link className='nav-link' to={`user-details/${btoa(user._id)}`}>
                      <div className='mgt-action'>view <FaEye size={20}/></div>                   
                     </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <div>
          {Array(Math.ceil(filteredData.length / itemsPerPage))
            .fill(null)
            .map((_, idx) => (
              <button
                key={idx}
                className={`page-button ${currentPage === idx + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
        </div>
        <div className="next-page-pointer">
          <div onClick={() => handlePageChange(currentPage + 1)} className="next-page">
            Next <FiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
