import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../Assets/WebGuard-Logo.png';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <div className='nav-logo-text-style'>
            <img src={logo} alt='WebGuard-Logo'/>
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
                <Link className="nav-link list-items-style" to="">Home</Link>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link list-items-style" to="">About Us</Link>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link list-items-style" to="">Donate</Link>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link list-items-style" to="">Contact Us</Link>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle list-items-style" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Login
                </Link>
                <ul className="dropdown-menu dropment" aria-labelledby="navbarDropdown">
                  {/* <li><Link className="dropdown-item" to="/login">Login</Link></li> */}
                  <li><Link className="dropdown-item" to="/user_login">User</Link></li>
                  <li><Link className="dropdown-item" to="/volunteers_login">Volunteer</Link></li>
                  <li><Link className="dropdown-item" to="/rescueperson_login">Rescue Member</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
