import React, { useState } from "react";
import UserNavbar from "../User/Navbar/UserNavbar";
import img from "../../Assets/disasterboat.jpg";
import "./Rescuehome.css";
import img2 from "../../Assets/imgdog.jpg";
import { Navbar } from "react-bootstrap";
import Footer from "../Common/Footer/Footer";
import FooterSecond from "../Common/Footer/FooterSecond";
import imgrobo from "../../Assets/robo.png";
import img1 from "../../Assets/studyinfo.png";
import img22 from "../../Assets/searchpp.png";
import img3 from "../../Assets/elipsics.png";
import img4 from "../../Assets/searchh.png";
import { Modal } from 'react-bootstrap'
import RescueAddComplaint from "./RescueAddComplaint";


function Rescuehome({data}) {

  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
    setShow(true);
    };

  return (
    <div>
       
      <div className="admin-login-header">
        “Communities rising together from disaster”
        
      </div>
      {
        data=='rescue'? <div style={{display:'flex',justifyContent:'end',marginRight:'120px',marginTop:'20px'}}>
              <button
                style={{border:'none',borderRadius:'5px',width:'190px',color:'#fff',background:'red'}}
                onClick={handleShow}
                className="mb-2"
                >Register Complaints
              </button>
            </div>:''
      }
     
      <div className="warning-container landing-alert">
        <div className="warning homelanding-warning">
          <p className="p1">
            For immediate assistance, contact our emergency hotline at{" "}
            <span>(123) 456-7890 </span>. We are available 24/7 to respond to
            emergencies and provide support
          </p>
          <p>
            Together, we can ensure safety, provide relief, and support
            recovery. Join us in making a difference.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex">
            <div className="col-6 homelanding-image">
              <img src={img} />
            </div>
            <div className="col-6 homelanding-imagetext">
              <h6>Are You Ready to Volunteering?</h6>
              <p>
                Welcome to the Rescue Team Portal Dedicated to Effective and
                Efficient Disaster Response
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rescuehome-about">
        <div className="rescuehome-content">
          <p>About Us</p>
          <div className="rescuehome-content-container">
            <img src={img2} alt="image" />
          </div>
          <div className="container">
            <h5>
              As a member of our rescue team, you play a crucial role in saving
              lives and providing aid during disasters. Our platform is designed
              to support you with the tools and information you need to perform
              your duties efficiently.
            </h5>
          </div>
        </div>
      </div>
      <div className="rescue-home-keymain">
        <div className="rescue-home-key">
          <h5>Key Features</h5>
          <div className="container rescue-home-keytext">
            <p>
              <span>Emergency Alerts:</span>Access the latest emergency alerts
              and updates in real-time. Stay informed about the current
              situations and areas needing immediate attention.
            </p>
            <p>
              <span>Task Management:</span>View and update the status of your
              assigned rescue tasks. Keep track of progress, report challenges,
              and mark tasks as completed.
            </p>
            <p>
              <span>Team Coordination: </span>Manage and request resources
              needed for rescue operations. Ensure that you have the necessary
              equipment and supplies to carry out your tasks effectively.
            </p>
            <p>
              <span>Resource Management:</span>Efficiently manage and deploy
              resources where they are needed most. Our system helps ensure that
              supplies, equipment, and personnel are utilized effectively.
            </p>
            <p>
              <span>Team Collaboration : </span>Team Collaboration : Coordinate
              with other team members and volunteers to ensure a cohesive and
              effective response.
            </p>
          </div>
        </div>
      </div>
      <div className="ourservices-main d-flex">
        <div className="row">
          <div className="col-4">
            <img src={imgrobo} alt="images" />
          </div>
        </div>
        <div className="row">
          <p className="ouservice-maincontentt">Our Services</p>
          <div className="col-6">
            <div className="aouservice-datac">
              <p>Real Time Alerts</p>
              <h6>
                Receive timely notifications about new emergencies and updates
                on ongoing situations.
              </h6>
            </div>
          </div>
          <div className="col-6">
            <div className="aouservice-datac">
              <p>Task Assignment</p>
              <h6>
                Task Assignment Get detailed information about your assigned
                tasks, including location, objectives, and deadlines.
              </h6>
            </div>
          </div>
          <div className="col-6">
            <div className="aouservice-datac">
              <p>Resource Management</p>
              <h6>
                Track and manage the allocation of resources, including
                equipment, medical supplies, and personnel.
              </h6>
            </div>
          </div>
          <div className="col-6">
            <div className="aouservice-datac">
              <p>Team Collaboration</p>
              <h6>
                Coordinate with other team members and volunteers to ensure a
                cohesive and effective response.
              </h6>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      <div className="contact-us-main">
        <div className="contact-us-head">
          <p>
            Your skills and dedication are invaluable in our mission to provide
            effective disaster relief. Here’s how you can maximize your impact:
          </p>
        </div>
        <div className="row contact-us-contents">
          <div className="col-3">
            <img src={img1} alt="image" />
            <p>Stay Updated</p>
            <h6>
              Regularly check for new emergency alerts and updates on ongoing
              operations.{" "}
            </h6>
          </div>
          <div className="col-3">
            <img src={img22} alt="image" />
            <p>Complete Tasks</p>
            <h6>
              Ensure timely completion of assigned tasks and update their status
              in the system.
            </h6>
          </div>
          <div className="col-3">
            <img src={img3} alt="image" />
            <p>Collaborate</p>
            <h6>
              Work closely with other team members and volunteers to enhance
              coordination and efficiency.
            </h6>
          </div>
          <div className="col-3">
            <img src={img4} alt="image" />
            <p>Request resources</p>
            <h6>
              Don’t hesitate to request the resources you need to carry out your
              tasks effectively.
            </h6>
          </div>
        </div>
        <div className="contactus-belowbox">
          <p className="contactus-belowboxp">Contact Us</p>
          {/* <div className='col-12'> */}
          <h6>
            Need assistance or more information? Reach out to us through our
            contact page. We are here to help and provide any information you
            need about our services.
          </h6>
          {/* </div> */}
        </div>
        <Modal show={show} onHide={handleClose} centered>
        <div className=''>
          <RescueAddComplaint 
            close={handleClose} 
          />
        </div>
      </Modal>
      </div>
      <Footer />
      <FooterSecond />
    </div>
  );
}

export default Rescuehome;
