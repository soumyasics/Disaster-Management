import React from 'react'
import './ResetPassword.css'
import Navbar from '../User/Navbar/Navbar'
import Footer from '../User/Footer/Footer'
import fireimg from "../../Assets/resetpassword.png";
import logo from '../../Assets/WebGuard-Logo.png'

function ResetPassword() {
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
                <div className='col-12 pb-3'>
                    <p className='forgottext'>New Password:</p>
                    <input type='password' className='form-control forgot-input-type-change' placeholder='Enter New Password' name='password'/>
                 </div>
                 <div className='col-12 pb-3'>
                    <p className='forgottext'>Conform Password:</p>
                    <input type='password' className='form-control forgot-input-type-change' placeholder='Re Enter Password' name='reenterpassword'/>
                 </div>
                   
                    <div className='col-12 pb-3'>
                        <button className='btn btn-primary forgot-btn-style-change' type='submit'>Reset</button>
                    </div>

            </form>
          </div>
        </div>
      </div><Footer/>
    </div>
  )
}

export default ResetPassword