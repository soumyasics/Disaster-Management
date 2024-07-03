import React from 'react'
import UserNavbar from '../User/Navbar/UserNavbar'
import img from "../../Assets/disasterboat.jpg"
import "./Rescuehome.css"
import img2 from "../../Assets/imgdog.jpg"
import { Navbar } from 'react-bootstrap'
import Footer from '../Common/Footer/Footer'
import FooterSecond from '../Common/Footer/FooterSecond'

function Rescuehome() {
  return (
    <div>
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
                        <h6>Are You Ready to Volunteering?</h6>
                        <p>Welcome to the Rescue Team Portal Dedicated to
                             Effective and Efficient Disaster Response</p>
                    </div>

                </div>

            </div>
        </div>
        <div className='rescuehome-about'>
        <div className='rescuehome-content'>
        <p>About Us</p>
        <div className='rescuehome-content-container'>
        <img src={img2} alt='image'/>
        </div>
        <div className='container'>

      
        <h5>
        As a member of our rescue team, you play a crucial role in saving lives and providing aid during disasters. Our platform is designed to support you with 
        the tools and information you need to perform your duties efficiently.
        </h5>
        </div>
    </div>
        </div>
        <div className='rescue-home-keymain'>
            <div className='rescue-home-key'>
                <h5>Key Features</h5>
                <div className='container rescue-home-keytext'>
                    <p><span>Emergency Alerts:</span>Access the latest emergency alerts and updates in real-time. Stay informed about the current situations and areas needing immediate attention.
                    </p>
                  <p><span>Task Management:</span>View and update the status of your assigned rescue tasks. Keep track of progress, report challenges, and mark tasks as completed.</p>
                  <p><span>Team Coordination: </span>Manage and request resources needed for rescue operations. Ensure that you have the necessary equipment and supplies to carry out your tasks effectively.</p>
                  <p><span>Resource Management:</span>Efficiently manage and deploy resources where they are needed most. Our system helps ensure that supplies, equipment, and personnel are utilized effectively.</p>
                  <p><span>Team Collaboration : </span>Team Collaboration : Coordinate with other team members and volunteers to ensure a cohesive and effective response.</p>
                </div>
            </div>
        </div>
<Footer/>
<FooterSecond/>
    </div>
  )
}

export default Rescuehome