import React from 'react'
import './VolunteersLogin.css'
import fireimg from "../../../Assets/fire-image.png";
import logo from '../../../Assets/WebGuard-Logo.png'
import { Link } from 'react-router-dom';
import Navbar from '../../User/Navbar/Navbar';
import Footer from '../../User/Footer/Footer';

function VolunteersLogin() {
  return (
    <div>
        <Navbar/>
      <div className='vol-login-header'>
        “Communities rising together from disaster”
      </div>
      <div className='row vol-login-row-style'>
        <div className='col-lg-5 col-md-3 col-sm-12'>
            <div className='image-stack'>
                <img src={fireimg} className='image first-image' alt='Fire 1' />
            </div>
        </div>
        <div className='col-lg-7 col-md-6 col-sm-12'>
          <div className='box-style-login-vol'>
            <form>
                <div className='vol-logo-section'>
                    <img src={logo}/>
                    <p>Login</p>
                </div>
            <div className='col-12 pb-3'>
                    <p className='login-vol'>UserName:</p>
                    <input type='text' className='form-control input-type-change-vol' placeholder='Enter Username' name='email'/>
                    </div>
                    <div className='col-12 pb-3'>
                    <p className='login-vol'>Password:</p>
                    <input type='password' className='form-control input-type-change-vol' placeholder='Enter password' name='password'/>
                    <div className='div-left-vol'>
                        <Link className='link-style-change-vol'>Forgot Password?</Link>
                    </div>
                    </div>
                    <div className='col-12 pb-3'>
                        <button className='btn btn-primary vol-btn-style-change' type='submit'>Login</button>
                    </div>
                    <p className='p-style-vol'>Don't Have an account? <Link className='link-style-change-volen'>Sign Up</Link></p>
            </form>
          </div>
        </div>
      </div><Footer/>
    </div>
  )
}

export default VolunteersLogin