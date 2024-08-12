import React from 'react'
import doimg1 from '../../Assets/home-rescueteam.png'
import doimg2 from '../../Assets/home_rescueteam.png'

function AboutUs() {
  return (
    <div>
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
    </div>
  )
}

export default AboutUs
