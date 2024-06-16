import React from 'react';
import "./Login.css";
import fireimg from "../../../Assets/fire-image.png";
import logo from '../../../Assets/WebGuard-Logo.png'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Login() {
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
            <form>
                <div className='logo-section'>
                    <img src={logo}/>
                    <p>Login</p>
                </div>
            <div className='col-12 pb-3'>
                    <p className='loginuser'>UserName:</p>
                    <input type='text' className='form-control input-type-change' placeholder='Enter Username' name='email'/>
                    </div>
                    <div className='col-12 pb-3'>
                    <p className='loginuser'>Password:</p>
                    <input type='password' className='form-control input-type-change' placeholder='Enter password' name='password'/>
                    <div className='div-left'>
                        <Link className='link-style-change'>Forgot Password?</Link>
                    </div>
                    </div>
                    <div className='col-12 pb-3'>
                        <button className='btn btn-primary btn-style-change' type='submit'>Login</button>
                    </div>
                    <p className='p-style-user'>Don't Have an account? <Link className='link-style-change-user'>Sign Up</Link></p>

            </form>
          </div>
        </div>
      </div><Footer/>
    </div>
  );
}

export default Login;
