import React from 'react'
import "./Userhome.css"
import img from"../../Assets/homeimg.jpg"
import caroimg1 from '../../Assets/main-caro-img1.png'
import caroimg2 from '../../Assets/home-caro-img2.png'
import caroimg3 from '../../Assets/main-caro-img3.png'
import doimg1 from '../../Assets/home-rescueteam.png'
import doimg2 from '../../Assets/home_rescueteam.png'
import fourthimg from '../../Assets/homepage_Features.png'
import Footer from '../Common/Footer/Footer'
import FooterSecond from '../Common/Footer/FooterSecond'
import UserNavbar from './Navbar/UserNavbar'

function Userhome() {
  return (
    <div>
        <UserNavbar/>
              <div className='admin-login-header'>
        “Communities rising together from disaster”
      </div>
      <div className="warning-container landing-alert">
      <div className="warning homelanding-warning">
        <p className='p1'>For immediate assistance, contact our emergency hotline at <span>(123) 456-7890 </span>. We are available 24/7 to respond to emergencies and provide support</p>
        <p>Together, we can ensure safety, provide relief, and support recovery. Join us in making a difference.</p>
      </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex'>
                    <div className='col-6 homelanding-image'>
                        <img src={img}/>
                    </div>
                    <div className='col-6 homelanding-imagetext'>
                        <h6>Are You Suffering From Disaster?</h6>
                        <p>Welcome to the Disaster Relief System Your Source 
                        for Effective and Coordinated Rescue Operations</p>
                    </div>

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

export default Userhome