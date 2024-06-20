import React from 'react';
import loginimg from "../../Assets/12832600_5057942.jpg"
import "./AdminLogin.css"
import fireimg from "../../Assets/fire-image.png";
import logo from '../../Assets/WebGuard-Logo.png'
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer/Footer';
import Navbar from '../Common/NavBar/Navbar';

function AdminLogin() {
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
            <form>
                <div className='admin-logo-section'>
                    <img src={logo}/>
                    <p>Login</p>
                </div>
            <div className='col-12 pb-3'>
                    <p className='admin-login'>UserName:</p>
                    <input type='text' className='form-control admin-input-type-change' placeholder='Enter Username' name='email'/>
                    </div>
                    <div className='col-12 pb-3'>
                    <p className='admin-login'>Password:</p>
                    <input type='password' className='form-control admin-input-type-change' placeholder='Enter password' name='password'/>
                    </div>
                    <div className='col-12 pb-3'>
                        <button className='btn btn-primary admin-btn-style-change' type='submit'>Login</button>
                    </div>
            </form>
          </div>
        </div>
      </div><Footer/>
    </div>
  )
}

export default AdminLogin