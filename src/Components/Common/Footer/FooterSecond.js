import React from 'react'
import './FooterSecond.css'

function FooterSecond() {
  return (
    <div>
    <div className='second-footer container-fluid'>
        <div className='row'>
        <div className='col-6 main-text'>
        © Webguard.com.All rights reserved.
        </div>
        <div className='col-2 second-footer-style'>
        Terms of Service
        </div>
        <div className='col-2 second-footer-style'>
        Privacy Policy
        </div>
        <div className='col-2 second-footer-style add-padding'>
        Cookies
        </div>
        </div>
    </div>
    </div>
  )
}

export default FooterSecond