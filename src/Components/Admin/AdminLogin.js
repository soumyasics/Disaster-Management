import React, { useState } from 'react';
import loginimg from "../../Assets/12832600_5057942.jpg"
import "./AdminLogin.css"
import fireimg from "../../Assets/fire-image.png";
import logo from '../../Assets/WebGuard-Logo.png'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Common/Footer/Footer';
import Navbar from '../Common/NavBar/Navbar';
import { FiEdit2, FiEye, FiEyeOff } from "react-icons/fi";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function AdminLogin() {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [admin, setAdmin] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const correctEmail = "Admin";
  const correctPassword = "Admin@123";

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    });
    console.log(admin);
  };

  const handleSubmit = (a) => {
    a.preventDefault();
    if (correctEmail === admin.email) {
      if (correctPassword === admin.password) {
        // alert("Login Success")
        toast.success("Login Successful")
        localStorage.setItem("adminid", 1);
        navigate("/Adminmain");
      } else {
        // alert("Password Wrong")
        toast.error("Password is wrong")
      }
    } else {
      // alert("Invalid username")
      toast.error("Invalid Username")
    }
  };

  return (
    <div>
        <Navbar/>
      <div className='admin-login-header'>
        “Communities rising together from disaster”
      </div>
      <div className='row admin-login-row-style'>
        <div className='col-lg-5 col-md-3 col-sm-12'>
            <div className='image-stack'>
                <img src={fireimg} className='image first-image' alt='Fire 1' />
            </div>
        </div>
        <div className='col-lg-7 col-md-6 col-sm-12'>
          <div className='box-style-admin-login'>
            <form onSubmit={handleSubmit}>
                <div className='admin-logo-section'>
                    <img src={logo}/>
                    <p>Login</p>
                </div>
            <div className='col-12 pb-3'>
                    <p className='admin-login'>UserName:</p>
                    <input type='text' className='form-control admin-input-type-change' placeholder='Enter Username' name='email'
                    value={admin.email}
                    onChange={handleChange}/>
                    </div>
                    <div className='col-12 pb-3'>
                    <p className='admin-login'>Password:</p>
                    <div className="input-wrapper wrapper-style">
                    <input type={showPassword ? "text" : "password"}  className='form-control admin-input-type-change' placeholder='Enter password' name='password'
                    value={admin.password}
                    onChange={handleChange}/>
                    <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </div>
                      </div>
                    </div>
                    <div className='col-12 pb-3'>
                        <button className='btn btn-primary admin-btn-style-change' type='submit'>Login</button>
                    </div>
            </form><ToastContainer/>
          </div>
        </div>
      </div><Footer/>
    </div>
  )
}

export default AdminLogin