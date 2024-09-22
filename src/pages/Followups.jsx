import React from "react";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import '../assets/styles/pages/followup.css'
import { LuUsers } from "react-icons/lu";
import {
  FiBell,
  FiSearch,
  FiPlus,
} from "react-icons/fi";
const Followups = () => {
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
    <div className="table-area">
    <Table bordered className="follow-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Current-action</th>
              <th>Assigned-At</th>
              <th>Current</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Amazon</td>
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td>Paul James</td>
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
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td>Paul James</td>
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
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td>Paul James</td>
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
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td>Paul James</td>
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
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td>Paul James</td>
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
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td>idahrex@gmail.com</td>
              <td>Pending</td>
              <td>Paul James</td>
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
    </div>

    </div>
  )
}

export default Followups