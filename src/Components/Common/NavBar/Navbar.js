import React from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../Assets/WebGuard-Logo.png'


function Navbar() {
  const navigate = useNavigate()
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
      <div>
        <div className='nav-logo-text-style'>
          <img src={logo} alt='WebGaurd-Logo'/>
          &nbsp; WEB GUARD
        </div>
      </div>
      <div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto padding-links">
            <li className="nav-item ">
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
          </ul>
        </div>
        </div>
  </div>
</nav>
  )
}

export default Navbar