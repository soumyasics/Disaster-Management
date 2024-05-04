import React from 'react';
import loginimg from "../../Assets/12832600_5057942.jpg"
import "./AdminLogin.css"

function AdminLogin() {
  return (
    <div id="Admin" className='row'>

    <div className='col-6 adminimage'>
        <img src={loginimg}/>
    </div>
    
    <div id='adminlogin' className='col-6'>
    
    <h1>Admin Login</h1>
    
    <div className='user-loginform'>
        <div className='user-login-input'>
            <input type='type' placeholder='Name'/>
        </div>
        <div className='user-login-input'>
            <input type='text' placeholder='Password'/>
        </div>
        
        <div className='user-fgpassbtn'>
            <button>LOG IN</button>
        </div>
    </div> 
    
    
    </div>
        </div>
  )
}

export default AdminLogin