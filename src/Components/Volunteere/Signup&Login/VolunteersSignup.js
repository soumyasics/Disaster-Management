import React from 'react';
import fireimg from "../../../Assets/fire-image.png";
import logo from '../../../Assets/WebGuard-Logo.png'
import "./VolunteersSignup.css"
import Navbar from '../../User/Navbar/Navbar';
import Footer from '../../User/Footer/Footer';
import { Link } from 'react-router-dom';

function VolunteersSignup() {
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
          <div className='box-style-vol-signup'>
            <form>
                <div className='logo-section'>
                    <img src={logo}/>
                    <p>Sign Up</p>
                </div>
            <div className='col-12 pb-3'>
                <div className='row'>
                    <div className='col-6'>
                        <p className='signinuser'>Name:</p>
                        <input type='text' className='form-control signup-input-type-change' placeholder='Enter Name' name='name'/>
                    </div>
                    <div className='col-6'>
                        <p className='signinuser'>Age:</p>
                        <input type='text' className='form-control signup-input-type-change' placeholder='Enter Age' name='age'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <p className='signinuser'>Gender:</p>
                        <input type='text' className='form-control signup-input-type-change' placeholder='Enter Your Gender' name='gender'/>
                    </div>
                    <div className='col-6'>
                        <p className='signinuser'>Phone Number:</p>
                        <input type='text' className='form-control signup-input-type-change' placeholder='Enter Phone Number' name='contact'/>
                    </div>
                </div>
                <div className='row'>
                <div className='col-12'>
                        <p className='signinuser'>Email Id:</p>
                        <input type='email' className='form-control signup-input-type-change' placeholder='Enter Email Id' name='email'/>
                    </div>
                </div>
                <div className='col-12'>
                        <p className='signinuser'>Address:</p>
                        <input type='text' className='form-control signup-input-type-change' placeholder='Enter Address' name='address'/>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <p className='signinuser'>Password:</p>
                        <input type='password' className='form-control signup-input-type-change' placeholder='Enter Password' name='password'/>
                    </div>
                    <div className='col-6'>
                        <p className='signinuser'>Conform Password:</p>
                        <input type='password' className='form-control signup-input-type-change' placeholder='Re-enter Password' name='conformpassword'/>
                    </div>
                </div>
                <button className='btn btn-primary button-style'>Register</button>
            </div>
            <p className='p-style-user'>Already Have an account? <Link className='link-style-change-user'>Login</Link></p>

            </form>
          </div>
        </div>
      </div><Footer/>

    </div>
  )
}

export default VolunteersSignup