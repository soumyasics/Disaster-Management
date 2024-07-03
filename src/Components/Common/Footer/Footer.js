import React from 'react'
import "./Footer.css"
import logo from '../../../Assets/WebGuard-Logo.png'

function Footer() {
  return (
    <div>
    <div className='user-footer container-fluid'>
      <div className='row'>
        <div  className='col-lg-4 col-md-6 col-sm-12 logo-text-style'>
          <img src={logo} alt='WebGaurd-Logo'/>
          WEB GUARD
        </div>
        <div  className='col-lg-3 col-md-6 col-sm-12'>
          <ul className='list-style'>
            <li className='footer-heading'>platform</li>
            <li className='footer-sub-heading'>Incident Management</li>
            <li className='footer-sub-heading'>Cybersecurity Response</li>
            <li className='footer-sub-heading'>Social Media Monitoring</li>
            <li className='footer-sub-heading'>Crisis Communication</li>
          </ul>
        </div>
        <div  className='col-lg-2 col-md-6 col-sm-12'>
          <ul className='list-style'>
              <li className='footer-heading'>Company</li>
              <li className='footer-sub-heading'>Blog</li>
              <li className='footer-sub-heading'>Careers</li>
              <li className='footer-sub-heading'>News</li>
            </ul>
        </div>
        <div  className='col-lg-3 col-md-6 col-sm-12'>
          <ul className='list-style'>
              <li className='footer-heading'>Resources</li>
              <li className='footer-sub-heading'>Documentation</li>
              <li className='footer-sub-heading'>Papers</li>
              <li className='footer-sub-heading'>Press Conferences</li>
            </ul>
        </div>
      </div>
    </div>
      {/* <div className='second-user-footer row'>
      <div className='col-6'>
        © Webguard.com.All rights reserved.
      </div>
      <div className='col-6'>
        <div className='col-2'>Terms of Service</div>
        <div className='col-2'>Privacy Policy</div>
        <div className='col-2'>Cookies</div>
      </div>
      </div> */}
    </div>
  )
}

export default Footer