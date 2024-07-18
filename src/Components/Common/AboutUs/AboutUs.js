import React from 'react'
import '../AboutUs/AboutUs.css'
import about from '../../../Assets/image 29.png';
function AboutUs() {
    return (
        <div className='col-12 about_bg'>
            <div class="  container text-center pt-5">
                <div class="row">
                   <p className='about_text_col'>AboutUs</p>
                </div>
                <div class="row justify-content-center mt-5">
                  <img className='about_img img-fluid' src={about}/>
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