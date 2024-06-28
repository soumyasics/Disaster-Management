import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import FooterSecond from '../Footer/FooterSecond'
import fourthimg from '../../../Assets/homepage_Features.png'
import caroimg1 from '../../../Assets/main-caro-img1.png'
import caroimg2 from '../../../Assets/home-caro-img2.png'
import caroimg3 from '../../../Assets/main-caro-img3.png'
import profile1 from '../../../Assets/profile-disaster.png'
import profile2 from '../../../Assets/profile-voluntering.png'
import profile3 from '../../../Assets/profile-takerisk.png'
import doimg1 from '../../../Assets/home-rescueteam.png'
import doimg2 from '../../../Assets/home_rescueteam.png'
import { IoIosWarning } from "react-icons/io";

function LandingPage() {

    const texts = [
        'Warning of heavy rains in Thiruvananthapuram.',
        ' yellow alert for eight districts of the state.',
        'Warnings for severe weather conditions such as floods & Storms.',
        ' total of 14 people have died due to flood.'
      ]; 
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, [texts.length]);
  return (
    <div>
<Navbar/>
      <div className='admin-login-header'>
        “Communities rising together from disaster”
      </div>

      <div className="warning-container landing-alert">
      <div className="warning landing-warning">
        <span role="img" aria-label="warning"><IoIosWarning /></span> {texts[currentIndex]}
      </div>
        </div>

      <div className='first-main-div container'>
        <h4>Join Our Mission to Make a Difference!</h4>
        <h5>“Using the newest connectivity technologies <span>WEB GUARD</span> digitizes all emergency and rescue services through out India”.</h5>
        <div className='row'>
            <div className='col-md-4 col-sm-12'>
                 <img src={profile1} className='img-fluid first-div-profile'></img>
                 <p>Are You Suffering From Disaster?</p>
                 <button className='btn btn-secondary'> Login Now</button>
            </div>
            <div className='col-md-4 col-sm-12'>
            <img src={profile2} className='img-fluid first-div-profile'></img>
            <p>Are You Ready to Volunteering?</p>
            <button className='btn btn-secondary'> Login Now</button>
            </div>
            <div className='col-md-4 col-sm-12'>
            <img src={profile3} className='img-fluid first-div-profile'></img>
            <p>Are You Ready to Take Risk?</p>
            <button className='btn btn-secondary'> Login Now</button>
            </div>
        </div>
      </div>

      <div className='second-div-main'>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={caroimg1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={caroimg2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={caroimg3} class="d-block w-100" alt="..."/>
            </div>
        </div>
      </div>
      <div className='second-des-div'>
        <p className='second-description'>“Emergency alert systems are crucial components of disaster management. They provide timely and critical information to the public, allowing people 
            to take necessary precautions to ensure their safety during emergencies. Effective emergency alert systems can help reduce the impact of natural and 
            human-made disasters”.</p>
      </div>
      </div>
      
      <div className='third-div-main container-fluid'>
        <div  className='third-heading-div'>
        <h2 className='third-heading'>What We Do</h2>
        </div>

        <div className='row third-row-spacing '>
            <div className='col-md-1 col-sm-12'>
            </div>
            <div className='col-md-4 col-sm-12'>
                <img src={doimg2} className='img-fluid third-img-style third-des-padding'/>
            </div>
            <div className='col-md-6 col-sm-12'>
                <div className='third-div-sec-col third-des-padding'>
                <h4>Our Rescue Team</h4>
                <p>Our trained, experienced rescue team is on-call day and night. Rescue comprises 
                    responsive operations that usually involve the saving of life, removal from danger, 
                    liberation from restraint, or the urgent treatment of injuries after an incident. 
                    It may be facilitated by a range of tools and equipment necessary to deal with 
                    the specific circumstances. </p>
                </div>
            <div className='col-md-1 col-sm-12'>
            </div>
            </div>
        </div>

        <div className='row third-sec-row'>
        <div className='col-md-1 col-sm-12'>
        </div>
        <div className='col-md-6 col-sm-12 '>
            <div className='third-des-padding'>
            <h4>Our Volunteers</h4>
            <p>Volunteering is a voluntary act of an individual or group freely giving time and 
            labor, often for community service. </p>
            </div>
        </div>
        <div className='col-md-4 col-sm-12'>
        <img src={doimg1} className='img-fluid third-img-style third-des-padding'/>
        </div>
        <div className='col-md-1 col-sm-12'>
        </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
            <div className='col-md-6 col-sm-12'>
                <div className='main-content-style'>
                    <label className="fourth-heading">Our Features</label>
                    <br /><br />
                    <ul className='fourth-ul-style'>
                        <li><label className='fourth-sublabel'>Real-Time Alerts and Notifications</label></li>
                        <li><label className='fourth-sublabel'>Emergency Information and Resources</label></li>
                        <li><label className='fourth-sublabel'>Interactive Maps and Tracking</label></li>
                        <li><label className='fourth-sublabel'>Communication Tools</label></li>
                        <li><label className='fourth-sublabel'>Volunteer and Resource Coordination</label></li>
                    </ul>
                </div>
            </div>
            <div className='col-md-6 col-sm-12 forth-seccol'>
                <img src={fourthimg} className='img-fluid fourth-image-adjust'></img>
            </div>
        </div>
      </div>

      <Footer/>
      <FooterSecond/>
    </div>
  )
}

export default LandingPage