import React from 'react'
import { Link } from 'react-router-dom'
import fgimg from "../../../Assets/20547283_6310507.jpg"


function VolunteersFgPass() {
  return (
    <div id="user-fgpass" className='row'>

    <div className='col-6 fgimage'>
        <img src={fgimg}/>
    </div>
    
    <div id='FgPassword' className='col-6'>
    
    <h1> Volunteer Reset Password</h1>
    
    <div className='user-loginform'>
        <div className='user-login-input'>
            <input type='email' placeholder='Mail id'/>
        </div>
        <div className='user-login-input'>
            <input type='text' placeholder='Password'/>
        </div>
        <div className='user-login-input'>
            <input type='text' placeholder='Confirm Password'/>
        </div>
        <div className='user-fgpassbtn'>
            <button>RESET</button>
        </div>
    </div> 
    
    <h2>OR</h2>
    <h3>YOU HAVE'NT ACCOUNT ? <Link to="/volunteers_signup"><span>CREATE ONE</span></Link></h3>
    </div>
        </div>
  )
}

export default VolunteersFgPass