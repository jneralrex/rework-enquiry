import React from "react";
import "../assets/styles/pages/userdetails.css";
import { FiBell, FiSearch, FiEdit } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { TfiTrash } from "react-icons/tfi";
import Form from "react-bootstrap/Form";

const UserDetails = () => {
  return (
    <div className="details-con">
      <div className="header-container">
        <div className="header-left">
          <div className="title">User Details</div>
          <div className="icon-group">
            <div>
              <FiSearch />
            </div>
            <div>
              <FiBell />
            </div>
          </div>
        </div>
        <div className="header-right">
          <div>Jones Ferdinand</div>
          <div>
            <LuUsers />
          </div>
        </div>
      </div>
      <div className="details-grid">
        <Container className="details-container">
          <div className="details-content">
            <div className="details-header">
              <Image
                src="https://images.pexels.com/photos/28497015/pexels-photo-28497015/free-photo-of-fashionable-woman-in-stylish-skirt-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                roundedCircle
                className="profile-image"
              />
              <div>
                <div className="profile-name">Andrea Barns</div>
                <div className="profile-role">Full stack developer</div>
              </div>
            </div>
            <div className="details-body">
              <div className="details-section">
                <div className="label">Name</div>
                <div className="value">Andrea Barns</div>
              </div>
              <div className="details-section">
                <div className="label">Role</div>
                <div className="value">Student: Full stack development</div>
              </div>
              <div className="details-section">
                <div className="label">Email</div>
                <div className="value">andrea@gmail.com</div>
              </div>
              <div className="details-section">
                <div className="label">Phone</div>
                <div className="value">+2349085674552</div>
              </div>
              <div className="details-section">
                <div className="label">Created At</div>
                <div className="value">July 2nd. 09:34am</div>
              </div>
            </div>
          </div>
        </Container>
        <Container className="action-container">
          <div className="action-content">
            <div className="action-item">
              <FiEdit size={30} />
              <div>Edit</div>
            </div>
            <div className="action-item">
              <Form>
                <Form.Check type="switch" id="custom-switch" size={20} />
              </Form>
              <div>Change Role</div>
            </div>
            <div className="action-item delete-item">
              <TfiTrash size={30} />
              <div>Delete</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default UserDetails;
