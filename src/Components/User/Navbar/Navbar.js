import React from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate()
  return (
    <nav id='common-home-navbar' class="navbar bg-body-tertiary">
    <div class="container-fluid appname">
   
   <h1  onClick={() => navigate("/")}> WebQuard</h1>
           
           
      
      <form class="d-flex usernav-links" role="search">
        <p><Link>Home</Link></p>
        <p><Link to ="/">About</Link></p>
        <p><Link to ="/user_login">Login</Link></p>
  
  
   
   </form>
  
   
   
    </div>
  </nav>
  )
}

export default Navbar