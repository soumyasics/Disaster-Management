import React from 'react'
import Navbar from '../NavBar/Navbar'
import "./Home.css"
import image from "../../../Assets/Screenshot (41).png"
import features from "../../../Assets/image1.jpg"
import features2 from "../../../Assets/image2.jpg"
import features3 from "../../../Assets/image3.jpg"
import features4 from "../../../Assets/image4.jpg"
import { Icon } from "@iconify/react";

function Home() {
  return (
   <>
   <Navbar/>
   <div id='Home'>
    
<section id="hero">
  <div className='hero-content'>
  <h1>We can't prevent disasters. But we can prepare for them. </h1>
  <p>WebGuard is a powerful site of tools that helps emergency responders, public saftey agencies, and communities stay connected, work more efficiently and build a better future for everyone. with everything from instant alert emails to real-time updates, communication channels with emergency teams and a comprehensive data hub for disaster relief operations, we'rehere to help you respond faster and more effectively to any crisis. </p>
<div className='hero-btn'>
  <div className='herobtn1'>
  <button>Get Started</button>
  </div>
  <div className='herobtn2'>
  <button>Learn More</button>
  </div>
 
 
</div>
  </div>

</section>

<section id='home-container'>
  <h1>Core features to help you respond faster and more effectively </h1>
  <p>WebGaurd offers a wide range of features to help you respond faster and more effectively to any disaster. Wheather you're a public saftey agency, an emergency responder, a non-profit organisation, or a community member, you can use our powerfull suite of tools to stay connected, work more effeciently and build a better future for everyone.  </p>
</section>

<section className='row' id="features">

  <div className='col-3'>
<img src={features} />
<h5>Instant alert emails</h5>
<p>Send and recieve instant alert emails to keep your team informed in any situations.</p>
  </div>
  <div className='col-3'>
<img src={features2} />
<h5>Real-Time updates</h5>
<p>Get realitime updates an incident, resources and volunteers in your area.</p>
  </div>
  <div className='col-3'>
<img src={features3} />
<h5>Communication channels</h5>
<p>Use communication channels to stay connected with emergency teams and the public.</p>
  </div>
  <div className='col-3'>
<img src={features4}/>
<h5>Data Hub</h5>
<p>Access a comprehensive data hub for disaster relief operations with everything from maps and charts to reports and dashboards.</p>
  </div>

</section>

<section className='row' id='features2'>
  <h4>Why WebGuard?</h4>

  <div className='col-3 features2-details'>
    <div className='guard-icon'>
    <Icon icon="ph:shield-check" className="guard"/>
    </div>
  
  <h5>Secure and reliable</h5>
  <p>WebGaurdis designed to meet the heightest standards of security, reliability and compilance, so you can trust us to protect your data and keep you connected when it matters most.</p>
  </div>
  <div className='col-3 features2-details'>
  <div className='guard-icon'>
  <Icon icon="ph:shield" className="guard"/>
      </div>
  
  <h5>Built for emergency response </h5>
  <p>WebGaurd is built for emergency response, with everything from instant alert emails to real-time updates, communication channels with emergency teams and a comprehensive data hub for a disaster relief operations.</p>
  </div>
  <div className='col-3  features2-details'>
  <div className='guard-icon'>
  <Icon icon="ph:shield" className="guard"/>
      </div>
 
  <h5>Backed by a global community</h5>
  <p>WebGaurd is backed by a global community o emergency responders, public saftey agencies, non-profits and technology partners who are Committed to helping you respond faster and more effectively to any disaster. </p>    
  </div>
  <div className='col-3 features2-details'>
  <div className='guard-icon'>
  <Icon icon="ri:shield-star-line" className="guard"/>
      </div>
  
  <h5>Committed to your success</h5>
  <p>Webguard is Committed to your success, with everything from personalized onboarding and training to 24/4 support and a wide range of resources to help you get the most out of our platform. </p>
  </div>
</section>
 

   </div>
   </>
  )
}

export default Home