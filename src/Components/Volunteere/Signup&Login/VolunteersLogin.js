import React from 'react'
import { Link } from 'react-router-dom'
import loginimg from "../../../Assets/4957136_4957136.jpg"

function VolunteersLogin() {
  return (
    <div id='user-login' className='row'>

<div className='col-6 loginimg'>
    
    <img src={loginimg}/>
</div>

         <div id='Login'className='col-6'>
        <h1> Volunteer Login</h1>
        <div className='user-loginform'>
            <div className='user-login-input'>
                <input type='email' placeholder='Mail id'/>
            </div>
            <div className='user-login-input'>
                <input type='text' placeholder='Password'/>
            </div>
            <p><Link to="/volunteers_resetpassword">Forget Password ?</Link></p>
            <div className='user-loginbtn'>
                <button>LOG IN</button>
            </div>
        </div> 
        <h2>OR</h2>
        <h3>YOU HAVE'NT ACCOUNT ? <Link to="/volunteers_signup"><span>CREATE ONE</span></Link></h3>
    </div>
    </div>
  )
}

export default VolunteersLogin