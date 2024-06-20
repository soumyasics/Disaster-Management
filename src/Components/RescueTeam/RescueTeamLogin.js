import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'
import fireimg from "../../Assets/rescue.png";
import logo from '../../Assets/WebGuard-Logo.png'
import "./RescueTeamLogin.css"
import Navbar from '../Common/NavBar/Navbar';
import FooterSecond from '../Common/Footer/FooterSecond';
import Footer from '../Common/Footer/Footer';
import { FiEdit2, FiEye, FiEyeOff } from "react-icons/fi";


function RescueTeamLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    return (
      
        <div>
    <Navbar/>
      <div className='res-login-header'>
        “Communities rising together from disaster”
      </div>
      <div className='row res-login-row-style'>
        <div className='col-lg-5 col-md-3 col-sm-12'>
            <div className='image-stack'>
                <img src={fireimg} className='image first-image1' alt='Fire 1' />
            </div>
        </div>
        <div className='col-lg-7 col-md-6 col-sm-12'>
          <div className='box-style-login-res'>
            <form>
                <div className='res-logo-section'>
                    <img src={logo} />
                    <p>Login</p>
                </div>
            <div className='col-12 pb-3'>
                    <p className='login-res'>UserName:</p>
                    <input type='text' 
                    className='form-control input-type-change-res' 
                    placeholder='Enter Username' 
                    name='email'
                    />
                    </div>
                    <div className='col-12 pb-3'>
                    <p className='login-res'>Password:</p>
                    <div className="input-wrapper wrapper-style">
                    <input type={showPassword ? "text" : "password"} 
                    className='form-control input-type-change-res' 
                    placeholder='Enter password' 
                    name='password'
                    />
                    <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </div>
                    </div>
                    <div className='div-left-res'>
                        <Link className='link-style-change-res'>Forgot Password?</Link>
                    </div>
                    </div>
                    <div className='col-12 pb-3'>
                        <button className='btn btn-primary res-btn-style-change' type='submit'>Login</button>
                    </div>
            </form>
          </div>
        </div>
      </div><Footer/><FooterSecond/>
        </div>

    )
}

export default RescueTeamLogin