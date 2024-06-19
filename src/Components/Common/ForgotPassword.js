import React from 'react'
import './ForgotPassword.css'
import Navbar from '../User/Navbar/Navbar'
import Footer from '../User/Footer/Footer'
import { Link } from 'react-router-dom'
import fireimg from "../../Assets/resetpassword.png";
import logo from '../../Assets/WebGuard-Logo.png'

function ForgotPassword() {
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
          <div className='box-style-forgot'>
            <form>
                <div className='forgot-logo-section'>
                    <img src={logo}/>
                    <p>Forgot Password</p>
                </div>
                <div className='col-12 pb-3'>
                    <p className='forgottext'>Email Id:</p>
                    <input type='text' className='form-control forgot-input-type-change' placeholder='Enter Email Id' name='email'/>
                 </div>
                   
                    <div className='col-12 pb-3'>
                        <button className='btn btn-primary forgot-btn-style-change' type='submit'>Submit</button>
                    </div>

            </form>
          </div>
        </div>
      </div><Footer/>
    </div>
  )
}

export default ForgotPassword