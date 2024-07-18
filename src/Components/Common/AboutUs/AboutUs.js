import React from 'react'
import '../AboutUs/AboutUs.css'
import about from '../../../Assets/image 29.png';
function AboutUs() {
    return (
        <div className='col-12 about_bg'>
            <div className="  container text-center pt-5">
                <div className="row">
                   <p className='about_text_col'>AboutUs</p>
                </div>
                <div className="row justify-content-center mt-5">
                  <img className='about_img img-fluid' src={about} alt='About image'/>
                </div>
                <div className='row mt-5'>
                    <p className='about_bottom_text mt-5 text-break'>As a member of our rescue team, you play a crucial role in saving lives and providing aid during disasters. Our platform is designed to support you with 
                    the tools and information you need to perform your duties efficiently.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs