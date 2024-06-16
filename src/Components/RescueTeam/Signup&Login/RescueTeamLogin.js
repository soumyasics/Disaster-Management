import React from 'react'; 
import { Link } from 'react-router-dom'
import fireimg from "../../../Assets/fire-image.png";
import logo from '../../../Assets/WebGuard-Logo.png'
import "./RescueTeamLogin.css"
import Navbar from '../../User/Navbar/Navbar';
import Footer from '../../User/Footer/Footer';



function RescueTeamLogin() {
    return (
        <div>
    <Navbar/>
      <div className='res-login-header'>
        “Communities rising together from disaster”
      </div>
      <div className='row res-login-row-style'>
        <div className='col-lg-5 col-md-3 col-sm-12'>
            <div className='image-stack'>
                <img src={fireimg} className='image first-image' alt='Fire 1' />
            </div>
        </div>
        <div className='col-lg-7 col-md-6 col-sm-12'>
          <div className='box-style-login-res'>
            <form>
                <div className='res-logo-section'>
                    <img src={logo}/>
                    <p>Login</p>
                </div>
            <div className='col-12 pb-3'>
                    <p className='login-res'>UserName:</p>
                    <input type='text' className='form-control input-type-change-res' placeholder='Enter Username' name='email'/>
                    </div>
                    <div className='col-12 pb-3'>
                    <p className='login-res'>Password:</p>
                    <input type='password' className='form-control input-type-change-res' placeholder='Enter password' name='password'/>
                    <div className='div-left-res'>
                        <Link className='link-style-change-res'>Forgot Password?</Link>
                    </div>
                    </div>
                    <div className='col-12 pb-3'>
                        <button className='btn btn-primary res-btn-style-change' type='submit'>Login</button>
                    </div>
                    <p className='p-style-res'>Don't Have an account? <Link className='link-style-change-rescue'>Sign Up</Link></p>
            </form>
          </div>
        </div>
      </div><Footer/>
        </div>

    )
}

export default RescueTeamLogin