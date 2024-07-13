import React from 'react'
import '../../Common/PrivacyPolicy/PrivacyPolicyView.css'

function PrivacyPolicyView() {
  return (
    <div>
      <div className='d-flex justify-content-center mt-5'>
        <div className='col-lg-8 col-md-8 col-sm-8'>
          <div className='float-end'>
            <a href='Privacy-PolicyUpdate'><button className=' ri-add-circle-line privacy_update_btn_text privacy_update_btn_bg d-flex justify-content-center'>Update</button></a>
          </div>
          <div className='Privact_head_text_bg'><p className='Privact_head_text d-flex justify-content-center mt-2'>Privacy Policy</p></div>

          <div className='row border shadow-lg rounded-4 mb-5'>
            <div className='col-lg-12 col-md-8 col-sm-8 p-3'>
              <p className='ps-5 mt-5 Privacy_text'>Privacy Policy</p>
              <div className='continer mt-3 ms-5 mx-5 '>
                <p className='lh-base Privacy_body_text'>A privacy policy is a statement or legal document that outlines how an organization collects, uses, discloses, and manages a customer's or client's data. It
                  serves to inform users about the specific details regarding their privacy rights and the company's practices. Here are the key components typically found in
                  a privacy policy:</p>
                  <ol className='Privacy_body_text'>
                    <li>Information Collection: Describes the types of information collected, such as personal identification information (name, email address, phone number), </li>
                    <li>financial information, and usage data (cookies, IP addresses).</li>
                    <li>Use of Information: Explains how the collected information will be used, such as to provide and improve services, process transactions, send </li>
                    <li>communications, and personalize user experience.</li>
                    <li>Disclosure of Information: Details the circumstances under which the information may be shared with third parties, such as service providers, business </li>
                    <li>partners, and legal authorities.</li>
                    <li>Data Security: Outlines the measures taken to protect user information from unauthorized access, alteration, disclosure, or destruction.</li>
                    <li>User Rights: Informs users of their rights regarding their personal data, including the right to access, correct, delete, or restrict the use of their data.</li>
                    <li>Cookies and Tracking Technologies: Describes the use of cookies and other tracking technologies to collect and store information about user activity.</li>
                    <li>Changes to the Privacy Policy: States how and when changes to the privacy policy will be communicated to users, and the process for users to review and
                    agree to the changes.</li>
                    <li>Contact Information: Provides contact details for users to ask questions, make requests, or file complaints related to privacy practices.</li>
                  </ol>
                  <p className='Privacy_body_text'>A well-crafted privacy policy ensures transparency and builds trust with users by clearly communicating how their personal data is handled.</p>
              </div>
              <div className='d-flex justify-content-center '><button className='save_btn_bg save_btn_text'>Save</button></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyView