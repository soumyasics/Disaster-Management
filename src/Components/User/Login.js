import React, { useState } from 'react';
import "./Login.css";
import fireimg from "../../Assets/fire-image.png";
import logo from '../../Assets/WebGuard-Logo.png'
import Navbar from '../Common/NavBar/Navbar';
import Footer from '../Common/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../Constants/Baseurl';
import FooterSecond from '../Common/Footer/FooterSecond';
import { FiEdit2, FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
    const [data, setData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [formIsValid, setFormIsValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const navigate=useNavigate();

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };  

    const handleChange = (event) => {
      const { name, value } = event.target;
      setData(prevData => ({
          ...prevData,
          [name]: value
      }));
      setErrors(prevErrors => ({
          ...prevErrors,
          [name]: ''
      }));
  };

  const validateField = (fieldName, value) => {
    if (!value.trim()) {
        setFormIsValid(false);
        return `${fieldName} is required`;
    }
    return '';
};

const handleSubmit = (event) => {
  event.preventDefault();
  let errors = {};
  let formIsValid = true;

  errors.email = validateField('Email', data.email);
  if (errors.email) formIsValid = false;

  errors.password = validateField('Password', data.password);
  if (errors.password) formIsValid = false;

  setErrors(errors);
  setFormIsValid(formIsValid);

  if (formIsValid) {
      console.log("data", data);
      axiosInstance.post('/userlogin', data)
          .then(response => {
              console.log("Response:", response);
              if (response.data.status === 200) {
                  console.log("Login Successful");
                  localStorage.setItem("usersId", response.data.data._id);
                  alert("Login Successful");
                  navigate("/user-home");
              } else {
                  console.log("Login Failed");
                  alert(response.data.msg);
              }
          })
          .catch(error => {
              console.error("There was an error!", error);
          });
  }
};
  return (
    <div>
        <Navbar/>
      <div className='user-login-header'>
        “Communities rising together from disaster”
      </div>
      <div className='row login-row-style'>
        <div className='col-lg-5 col-md-3 col-sm-12'>
            <div className='image-stack'>
                <img src={fireimg} className='image first-image' alt='Fire 1' />
            </div>
        </div>
        <div className='col-lg-7 col-md-6 col-sm-12'>
          <div className='box-style-login'>
            <form onSubmit={handleSubmit}>
                <div className='logo-section'>
                    <img src={logo}/>
                    <p>User Login</p>
                </div>
            <div className='col-12 pb-3'>
                    <p className='loginuser'>Email:</p>
                    <input type='text' 
                    className='form-control input-type-change' 
                    placeholder='Enter Email' name='email'
                    value={data.email}
                    onChange={handleChange}
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}

                    </div>
                    <div className='col-12 pb-3'>
                      <div className="mb-3 position-relative">
                        <p className='loginuser'>Password:</p>
                        <div className="input-wrapper wrapper-style">
                          <input
                            type={showPassword ? "text" : "password"}
                            className='form-control input-type-change'
                            placeholder='Enter password'
                            name='password'
                            value={data.password}
                            onChange={handleChange}
                          />
                          <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                          </div>
                        </div>
                        {errors.password && <div className="text-danger">{errors.password}</div>}
                      </div>
                      <div className='div-left-vol'>
                        <Link to="/forgot-passsword" className='link-style-change-vol'>Forgot Password?</Link>
                    </div>

                    </div>
                    <div className='col-12 pb-3'>
                        <button className='btn btn-primary btn-style-change' type='submit'>Login</button>
                    </div>
                    <p className='p-style-user'>Don't Have an account? <Link to="/user_signup" className='link-style-change-user'>Sign Up</Link></p>

            </form>
          </div>
        </div>
      </div><Footer/><FooterSecond/>
    </div>
  );
}

export default Login;
