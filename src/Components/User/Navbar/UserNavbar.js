import React, { useEffect, useState } from 'react';
import logo from '../../../Assets/WebGuard-Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import { Modal, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Userprofile from '../Profile/Userprofile';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserNavbar() {
  const usersId = localStorage.getItem("usersId");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("usersId") == null) {
      navigate("/");
    }
  }, [navigate]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const confirmLogout = () => {
    localStorage.removeItem("usersId");
    setShow(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div>
            <div className='nav-logo-text-style'>
              <img src={logo} alt='WebGuard-Logo' />
              &nbsp; WEB GUARD
            </div>
          </div>
          <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto padding-links">
                <li className="nav-item">
                  <Link className="nav-link list-items-style" to="/user-home">Home</Link>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                  <Link className="nav-link list-items-style" to="/user-viewalert">Emergency Alerts</Link>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                  <Link className="nav-link list-items-style" to="/user_addalerts">Add Alerts</Link>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                  <Link className="nav-link list-items-style" to="/user-viewreqstatus">Rescue Status</Link>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                  <Link className="nav-link list-items-style" to="/user-viewemergencycontacts">Contacts</Link>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <li className="nav-item dropdown">
                  <DropdownButton id="dropdown-weather" title="Weather">
                    <Dropdown.Item onClick={handleShow} hidden>Weather</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/weatherforecasting'>Weather</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/weatherforecastingdays'>Weather Forecasting</Dropdown.Item>

                  </DropdownButton>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle list-items-style custom-dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <IoPersonCircleOutline size={25} className='profile_icon' />
                  </Link>
                  <ul className="dropdown-menu dropment" aria-labelledby="navbarDropdown">
                    <li className='dropmentli'><Link className="dropdown-item" onClick={handleShow}>Profile</Link></li>
                    <li className='dropmentli'><Link className="dropdown-item" to='/user-viewprivacypolicy'>Privacy Policy</Link></li>
                    <li className='dropmentli'><Link className="dropdown-item" onClick={confirmLogout}>Logout</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose} centered>
        <Userprofile close={handleClose} />
      </Modal>
    </div>
  )
}

export default UserNavbar;
