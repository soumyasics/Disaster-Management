import React, { useState } from 'react'
import './ForgotPassword.css'
import { Link } from 'react-router-dom'
import fireimg from "../../../Assets/resetpassword.png";
import logo from '../../../Assets/WebGuard-Logo.png'
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import FooterSecond from '../Footer/FooterSecond';
import axiosInstance from '../../Constants/Baseurl';

function ForgotPassword() {
  const [email,setEmail]=useState({})
  const changefn=((e)=>{
    setEmail({
      ...email,[e.target.name]:e.target.value
    })
  })
  console.log(email);

  const submitfn=((a)=>{
    a.preventDefault()
    axiosInstance.post(`forgotPWDsentMail`,email)
    .then((res)=>{
      console.log(res);
      if(res.data.status==200){
        alert("Password reset email has been sent to your  email.")
        window.location.reload()
      }
      if(res.data.status==500){
        alert(res.data.msg)
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  })
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
            <form onSubmit={submitfn}>
                <div className='forgot-logo-section'>
                    <img src={logo}/>
                    <p>Forgot Password</p>
                </div>
                <div className='col-12 pb-3'>
                    <p className='forgottext'>Email Id:</p>
                    <input type='email' className='form-control forgot-input-type-change' placeholder='Enter Email Id' name='email' value={email.email} onChange={changefn}/>
                 </div>
                    <div className='col-12 pb-3'>
                        <button className='btn btn-primary forgot-btn-style-change' type='submit'>Submit</button>
                    </div>
            </form>
          </div>
        </div>
      </div><Footer/><FooterSecond/>
    </div>
  )
}

export default ForgotPassword