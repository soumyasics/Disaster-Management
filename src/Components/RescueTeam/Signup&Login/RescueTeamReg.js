import React from 'react';
import signupimg from "../../../Assets/12953573_Data_security_05.jpg"


function RescueTeamReg() {
  return (
    <div id='signup' >

    <div className='row signup-user'>

        <div className='user-regimg col-6'>
            <img src={signupimg} alt='Signup image' />
        </div>
        <div className='col-6 volunteerregsignupform'>
            <h1>Rescue Person Register</h1>

            <div className='user-form row'>
                <div className='user_registration col-6'>

                    <div className='userreg-input'>
                        <input type='text' placeholder='First name' />
                    </div>


                </div>

                <div className='user_registration col-6'>

                    <div className='userreg-input'>
                        <input type='text' placeholder='Last name' />
                    </div>


                </div>
            </div>

            <div className='user-form  row'>

                <div className='user_registration radiobtn col-12'>

                    <label>Gender</label>
                    <div className='radiobtn-input'>
                    <input type='radio' value="male" />
                    <label>Male</label>
                    </div>
                    <div className='radiobtn-input'>
                    <input type='radio' value="female" />
                    <label>Female</label>
                    </div>
                    <div className='radiobtn-input'>
                    <input type='radio' value="others" />
                    <label>Others</label>

                    </div>
                    
                    
                    
                </div>

            </div>

            <div className='user-form row'>

                <div className='user_registration col-6'>

                    <div className='userreg-input'>

                    <input type='text' placeholder='Age' />

                    </div>

                   
                    <div className='userreg-input'>

                    <input type='text' placeholder='City' />

                    </div>

                   

                    <div className='userreg-input'>

                    <input type='text' placeholder='State' />

                    </div>

                   
                    <div className='userreg-input'>

                    <input type='email' placeholder='Email' />

                    </div>

                    <div className="volunteer-files">

<label>Profile Image</label>
<input type="file" name="profilePicture" />

</div>


                   

                    <div className='userreg-input'>
                    <input type='password' placeholder='Password' />
                    </div>

                
                </div>

                <div className='user_registration col-6'>

                    <div className='userreg-input'>
                    <input type='text' placeholder='Street' />
                    </div>

                   

                    <div className='userreg-input'>
                    <input type='text' placeholder='Pincode' />
                    </div>

                   

                    <div className='userreg-input'>
                    <input type='text' placeholder='Nationaity' />
                    </div>

                    

                    <div className='userreg-input'>
                    <input type='text' placeholder='Contact' />
                    </div>

                    <div className="volunteer-files">

              <label>Aadhaar Image</label>
              <input type="file" name="profilePicture" />

            </div>
           

                    

                    <div className='userreg-input'>
                    <input type='password' placeholder='Confirm Password' />
                    </div>


                </div>
            </div>

            <div className='user-regbtn'>
                <button>Register</button>
            </div>

        </div>
    </div>


</div>
  )
}

export default RescueTeamReg