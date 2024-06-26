import React, { useState } from 'react';
import './ResetPassword.css';
import fireimg from "../../../Assets/resetpassword.png";
import logo from '../../../Assets/WebGuard-Logo.png';
import { FiEye, FiEyeOff } from "react-icons/fi";
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import FooterSecond from '../Footer/FooterSecond';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../Constants/Baseurl'; // Make sure this path is correct

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [userCategory, setUserCategory] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleUserCategoryChange = (e) => {
    setUserCategory(e.target.value);
  };

  const validatePassword = () => {
    if (userCategory === '') {
      setError('Please select a user category.');
      return false;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword()) {
      return;
    }

    try {
      let apiEndpoint;
      if (userCategory === 'User') {
        apiEndpoint = `/userforgotpswd/${id}`;
      } else if (userCategory === 'Volunteer') {
        apiEndpoint = `/volunteerforgotpassword/${id}`;
      } else if (userCategory === 'RescueMember') {
        apiEndpoint = `/resetPwdrescue/${id}`;
      }
      const response = await axiosInstance.post(apiEndpoint, { password });
      console.log(response);
      setSuccess(response.data.msg);
      setError('');

      if (userCategory === 'User') {
        navigate("/user_login");
      } else if (userCategory === 'Volunteer') {
         navigate("/volunteers_login");
      }else if(userCategory === 'RescueMember'){
        navigate("/rescueperson_login")
      }

    } catch (err) {
      setError('Failed to reset password. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div>
      <Navbar/>
      <div className='forgot-header'>
        “Communities rising together from disaster”
      </div>
      <div className='row login-row-style' style={{paddingTop:"40px"}}>
        <div className='col-lg-5 col-md-3 col-sm-12'>
          <div className='image-stack'>
            <img src={fireimg} className='image first-image image-stylechange' alt='Fire 1' />
          </div>
        </div>
        <div className='col-lg-7 col-md-6 col-sm-12'>
          <div className='box-style-reset'>
            <form onSubmit={handleSubmit}>
              <div className='reset-logo-section'>
                <img src={logo} alt='Logo'/>
                <p>Reset Password</p>
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <div className='col-12 pb-3 position-relative'>
                <p className='forgottext'>Select User Category :</p>
                <div className="input-wrapper wrapper-style">
                  <select value={userCategory} onChange={handleUserCategoryChange}>
                    <option hidden>Select User</option>
                    <option value="User">User</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="RescueMember">Rescue Member</option>
                  </select>
                </div>
              </div>

              <div className='col-12 pb-3 position-relative'>
                <p className='forgottext'>New Password:</p>
                <div className="input-wrapper wrapper-style">
                  <input 
                    type={showPassword ? "text" : "password"}
                    className='form-control forgot-input-type-change' 
                    placeholder='Enter New Password' 
                    name='password'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </div>
                </div>
              </div>
              <div className='col-12 pb-3 position-relative'>
                <p className='forgottext'>Confirm Password:</p>
                <div className="input-wrapper position-relative">
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    className='form-control forgot-input-type-change' 
                    placeholder='Re-enter Password' 
                    name='reenterpassword'
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <div className="password-toggle-icon-reenter-forgot" onClick={toggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </div>
                </div>
              </div>
              <div className='col-12 pb-3'>
                <button className='btn btn-primary forgot-btn-style-change' type='submit'>Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
      <FooterSecond/>
    </div>
  );
}

export default ResetPassword;
