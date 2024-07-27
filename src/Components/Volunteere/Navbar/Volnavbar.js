import React, { useEffect, useState } from 'react';
import logo from '../../../Assets/WebGuard-Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VolViewprofile from '../Profile/VolViewprofile';


function Volnavbar() {
    const volid=localStorage.getItem("volunteerId")
    const navigate=useNavigate()
    console.log(volid+"volid");

    useEffect(()=>{
        if(volid===null){
            navigate("/")
        }
    },[])

    const[del,setDel]=useState(null)

    const confirmLogout = () => {
      localStorage.removeItem("volunteerId");
      setDel(null);
      navigate("/");
      window.location.reload()
    };
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
                <Link className="nav-link list-items-style" to="/volunteers_home">Home</Link>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link list-items-style" to="/volunteers_emergencyalert">Emergency Alerts</Link>
              </li>
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link list-items-style" to="">Volunteers</Link>
              </li> */}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link list-items-style" to="">Manage Disaster</Link>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link list-items-style" to="/Volunteer-viewparticipatedalerts">Task Update</Link>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link list-items-style" to="">Complaints</Link>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link list-items-style" to="">Contact</Link>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle list-items-style custom-dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <IoPersonCircleOutline size={25} className='profile_icon' />
                </Link>
                <ul className="dropdown-menu dropment" aria-labelledby="navbarDropdown">
                  <li className='dropmentli'><Link className="dropdown-item" onClick={handleShow}>Profile</Link></li>
                  <li clas  sName='dropmentli'><Link className="dropdown-item" to="/rescueperson_signup"  >Add Rescue Member</Link></li>
                  <li className='dropmentli'><Link className="dropdown-item" onClick={confirmLogout} >Logout</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <Modal show={show} onHide={handleClose} centered>
        <VolViewprofile close={handleClose} />
    </Modal>
  </div>

  )
}

export default Volnavbar