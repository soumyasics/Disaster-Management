import React from 'react'
import Contactus from '../../../Assets/ContactUs.jpg'
import {AiFillMail, AiFillMobile, AiFillPhone } from 'react-icons/ai'
import './Contactus.css'
import { FaBlenderPhone } from "react-icons/fa";
function ContactUs() {
  return (
    <>
        <div className='admin-login-header'>
            “Communities rising together from disaster”
        </div>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={Contactus} width='600px' />
                </div>
                <div className='col-md-6 pt-5' style={{textAlign:'center'}}>
                    <h3>We're Here to Help</h3>
                    <p className='mt-3' >
                    In times of disaster, reaching out for help is crucial. 
                    Our team is dedicated to providing the support and assistance you need. 
                    Please don't hesitate to contact us through any of the following methods:
                    </p>
                    <div className='contact-details mt-5 mx-5'>
                        <div className='contact-details-phone'>
                            <AiFillPhone color='#014C56' size={40}/>
                            <div className='mt-4'>
                                <FaBlenderPhone color='#014C56' />{"  "}0481 - 6892091003
                            </div>
                            <div className='mt-3'>
                                <AiFillMobile color='#014C56'/>{"  "}1899 - 989 - 092
                            </div>
                        </div>
                        <div className='contact-details-mail'>
                            <AiFillMail color='#014C56' size={40}/>
                            <p className='mt-5'>
                                webguarofficial@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactUs