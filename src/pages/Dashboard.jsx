import React from "react";
import Card from "react-bootstrap/Card";
import { LuFileBadge, LuLink, LuLink2, LuUsers } from "react-icons/lu";
import { FiHome, FiBook, FiCreditCard, FiBell, FiBarChart, FiSearch, FiLink, FiLink2, FiPlus, FiFilter } from "react-icons/fi";
import '../assets/styles/pages/dashboard.css';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { RiExchangeBoxLine, } from "react-icons/ri";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="dashboard-header-left">
            <div className="header-title">Dashboard</div>
            <div className="header-icons">
              <div><FiSearch /></div>
              <div><FiBell /></div>
            </div>
          </div>
          <div className="dashboard-header-right">
            <div>Jones Ferdinand</div>
            <div><LuUsers /></div>
          </div>
        </div>

        <div className="dashboard-cards">
          <Card className="dashboard-card">
            <Card.Body className="dashboard-card-body">
              <div className="card-icon-container">
                <LuUsers size={20} />
              </div>
              <div className="card-title">New Enquiries</div>
            </Card.Body>
            <p className="card-stat">20</p>
            <div className="card-link">
              <div><LuLink2 size={15} style={{ color: '#16b6f0' }} /></div> <div>click link to view</div>
            </div>
          </Card>

          <Card className="dashboard-card">
            <Card.Body className="dashboard-card-body">
              <div className="card-icon-container" style={{ border: "1px solid #ffc530" }}>
                <LuUsers size={20} style={{ color: "#ffc530" }} />
              </div>
              <div className="card-title">Pending Enquiries</div>
            </Card.Body>
            <p className="card-stat">5</p>
            <div className="card-link">
              <div><LuLink2 size={15} style={{ color: '#16b6f0' }} /></div> <div>click link to view</div>
            </div>
          </Card>

          <Card className="dashboard-card">
            <Card.Body className="dashboard-card-body">
              <div className="card-icon-container" style={{ border: "1px solid #fc6565" }}>
                <LuUsers size={20} style={{ color: "#fc6565" }} />
              </div>
              <div className="card-title">Closed Enquiries</div>
            </Card.Body>
            <p className="card-stat">52</p>
            <div className="card-link">
              <div><LuLink2 size={15} style={{ color: '#16b6f0' }} /></div> <div>click link to view</div>
            </div>
          </Card>

          <Card className="dashboard-card">
            <Card.Body className="dashboard-card-body">
              <div className="card-icon-container" style={{ border: "1px solid #16b6f0" }}>
                <LuUsers size={20} style={{ color: "#16b6f0" }} />
              </div>
              <div className="card-title">Total Enquiries</div>
            </Card.Body>
            <p className="card-stat">24</p>
            <div className="card-link">
              <div><LuLink2 size={15} style={{ color: '#16b6f0' }} /></div> <div>click link to view</div>
            </div>
          </Card>

          <Card className="dashboard-card">
            <Card.Body className="dashboard-card-body">
              <div className="card-icon-container" style={{ border: "1px solid #73ce97" }}>
                <RiExchangeBoxLine size={20} style={{ color: "#73ce97" }} />
              </div>
              <div className="card-title">Conversion rate</div>
            </Card.Body>
            <p className="card-stat">78%</p>
            <div className="card-link">
              <div><LuLink2 size={15} style={{ color: '#16b6f0' }} /></div> <div>click link to view</div>
            </div>
          </Card>
        </div>

        <div className="recent-enquiries-header">
          <div className="header-title-bold">Recent Enquiries</div>
          <div className="add-button">
            <FiPlus size={20} style={{ color: "white" }} />
          </div>
        </div>

        <Table bordered className="table">
          <thead>
            <tr>
              <th>Source</th>
              <th>Brief-Description</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Follow-Up Actions</th>
              <th>Assigned Staff</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amazon</td>
              <td></td>
              <td>Charles Vermit </td>
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td></td>
              <td>Paul James</td>
              <td>02/4/2016</td>
              <td> <Dropdown className="table-drop-down">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="table-drop-down-title">
                  view
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop-down-menu">
                  <Dropdown.Item href="#/action-1">View all enquiries</Dropdown.Item>
                  <Dropdown.Item href="#/action-2"></Dropdown.Item>
                  <Dropdown.Item href="#/action-3"></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown></td>
            </tr>
            <tr>
              <td>Amazon</td>
              <td></td>
              <td>Charles Vermit </td>
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td></td>
              <td>Paul James</td>
              <td>02/4/2016</td>
              <td> <Dropdown className="table-drop-down">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="table-drop-down-title">
                  view
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop-down-menu">
                  <Dropdown.Item href="#/action-1">View all enquiries</Dropdown.Item>
                  <Dropdown.Item href="#/action-2"></Dropdown.Item>
                  <Dropdown.Item href="#/action-3"></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown></td>
            </tr>
            <tr>
              <td>Amazon</td>
              <td></td>
              <td>Charles Vermit </td>
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td></td>
              <td>Paul James</td>
              <td>02/4/2016</td>
              <td> <Dropdown className="table-drop-down">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="table-drop-down-title">
                  view
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop-down-menu">
                  <Dropdown.Item href="#/action-1">View all enquiries</Dropdown.Item>
                  <Dropdown.Item href="#/action-2"></Dropdown.Item>
                  <Dropdown.Item href="#/action-3"></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown></td>
            </tr>
            <tr>
              <td>Amazon</td>
              <td></td>
              <td>Charles Vermit </td>
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td></td>
              <td>Paul James</td>
              <td>02/4/2016</td>
              <td> <Dropdown className="table-drop-down">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="table-drop-down-title">
                  view
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop-down-menu">
                  <Dropdown.Item href="#/action-1">View all enquiries</Dropdown.Item>
                  <Dropdown.Item href="#/action-2"></Dropdown.Item>
                  <Dropdown.Item href="#/action-3"></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown></td>
            </tr>
            <tr>
              <td>Amazon</td>
              <td></td>
              <td>Charles Vermit Anthony </td>
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td></td>
              <td>Paul James</td>
              <td>02/4/2016</td>
              <td> <Dropdown className="table-drop-down">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="table-drop-down-title">
                  view
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop-down-menu">
                  <Dropdown.Item href="#/action-1">View all enquiries</Dropdown.Item>
                  <Dropdown.Item href="#/action-2"></Dropdown.Item>
                  <Dropdown.Item href="#/action-3"></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown></td>
            </tr>
          </tbody>
        </Table>

        <div className="second-enquiries-header">
          <div className="flex-between">
            <div className="header-title-bold">Recent Enquiries</div>
            <div className="filter-button">
              <FiFilter size={20} style={{ color: "white" }} /> <div>Filter</div>
            </div>
          </div>
          <div className="header-title-bold2">Enquiries by Source</div>
        </div>

        <div className="second-table">
          <Table bordered className="table2">
            <thead>
              <tr>
                <th>Enquiry ID</th>
                <th>Action</th>
                <th>Performed by</th>
                <th>Details</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#2253</td>
                <td>taken</td>
                <td>Charles Vermit </td>
                <td>Full-stack development</td>
                <td> <Dropdown className="table-drop-down">
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className="table-drop-down-title">
                    view
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="drop-down-menu">
                    <Dropdown.Item href="#/action-1">View all enquiries</Dropdown.Item>
                    <Dropdown.Item href="#/action-2"></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown></td>
              </tr>
              <tr>
                <td>#2253</td>
                <td>taken</td>
                <td>Charles Vermit </td>
                <td>Full-stack development</td>
                <td> <Dropdown className="table-drop-down">
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className="table-drop-down-title">
                    view
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="drop-down-menu">
                    <Dropdown.Item href="#/action-1">View all enquiries</Dropdown.Item>
                    <Dropdown.Item href="#/action-2"></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown></td>
              </tr>
            </tbody>
          </Table>



          <div className="pie-holder">
            <div className="pie-chart"></div>
          </div>
        </div>

      </div>

    </>
  );
};

export default Dashboard;
