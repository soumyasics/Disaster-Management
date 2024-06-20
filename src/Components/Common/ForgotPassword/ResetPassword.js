import React, { useState } from 'react'
import './ResetPassword.css'
import fireimg from "../../../Assets/resetpassword.png";
import logo from '../../../Assets/WebGuard-Logo.png'
import {FiEye, FiEyeOff } from "react-icons/fi";
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import FooterSecond from '../Footer/FooterSecond';


function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
        <Navbar/>
      <div className='forgot-header'>
        “Communities rising together from disaster”
      </div>
      <div className='row login-row-style'>
        <div className='col-lg-5 col-md-3 col-sm-12'>
            <div className='image-stack'>
                <img src={fireimg} className='image first-image image-stylechange' alt='Fire 1' />
            </div>
        </div>
        <div className='col-lg-7 col-md-6 col-sm-12'>
          <div className='box-style-reset'>
            <form>
                <div className='reset-logo-section'>
                    <img src={logo}/>
                    <p>Reset Password</p>
                </div>
                <div className='col-12 pb-3 position-relative'>
                    <p className='forgottext'>New Password:</p>
                    <div className="input-wrapper wrapper-style">
                    <input 
                    type={showPassword ? "text" : "password"}
                    className='form-control forgot-input-type-change' 
                    placeholder='Enter New Password' 
                    name='password'
                    />
                    <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                </div>
                 </div>
                 <div className='col-12 pb-3 position-relative'>
                    <p className='forgottext'>Conform Password:</p>
                    <div className="input-wrapper position-relative">
                    <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    className='form-control forgot-input-type-change' 
                    placeholder='Re Enter Password' 
                    name='reenterpassword'
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
      </div><Footer/><FooterSecond/>
    </div>
  )
}

export default ResetPassword