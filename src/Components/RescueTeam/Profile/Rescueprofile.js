import React, { useEffect, useState } from 'react';
import axiosInstance from '../../Constants/Baseurl';

function Rescueprofile() {
    const volid = localStorage.getItem("rescueId");
    console.log(volid);
    const [isEditing, setIsEditing] = useState(false);
    const [userDetails, setUserDetails] = useState({
      name: "",
      age: "",
      city: "",
      skills: "",
      address: "",
      phone: "",
      email: "",
    });
  
    const [errors, setErrors] = useState({
      age: "",
      phone: "",
      email: "",
    });
  
    const validate = () => {
      let tempErrors = { ...errors };
  
      // Age validation
      if (userDetails.age < 0 || userDetails.age > 100) {
        tempErrors.age = "Age must be between 0 and 100.";
      } else {
        tempErrors.age = "";
      }
  
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userDetails.email)) {
        tempErrors.email = "Invalid email format.";
      } else {
        tempErrors.email = "";
      }
  
      // Phone number validation
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(userDetails.phone)) {
        tempErrors.phone = "Phone number must be 10 digits.";
      } else {
        tempErrors.phone = "";
      }
  
      setErrors(tempErrors);
  
      return Object.values(tempErrors).every(x => x === "");
    };
  
    const handleEditClick = () => {
      setIsEditing(!isEditing);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserDetails({ ...userDetails, [name]: value });
    };
  
    const handleSave = (e) => {
      e.preventDefault();
      if (validate()) {
        axiosInstance.post(`updaterescuemember/${volid}`, userDetails)
          .then((res) => {
            console.log(res);
            setIsEditing(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
  
    useEffect(() => {
      axiosInstance.post(`viewresquemembersbyid/${volid}`)
        .then((res) => {
          console.log(res);
          setUserDetails(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [volid]);
  
  return (
    <div className='container'>
      <div className='user-profilemain'>
        <div className='user-profileinside'>
          <div className='user-profiletop '>
            <p>Profile</p>
            {/* <h5 className='ri-close-line'></h5> */}
          </div>
          <div className='user-profiledetails'>
            {isEditing ? (
              <form onSubmit={handleSave}>
                <div className='profile-field container'>
                  <div className='row'>
                    <div className='col-12 md-6 sm-6'>
                      <div className='row'>
                        <div className='col-6'>
                          <label>Name: </label>
                        </div>
                        <div className='col-6'>
                          <input
                            type="text"
                            name="name"
                            value={userDetails.name}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className='col-6'>
                          <label>Age: </label>
                        </div>
                        <div className='col-6'>
                          <input
                            type="number"
                            name="age"
                            value={userDetails.age}
                            onChange={handleChange}required
                          />
                          {errors.age && <p className="error">{errors.age}</p>}
                        </div>

                        <div className='col-6'>
                          <label>City: </label>
                        </div>
                        <div className='col-6'>
                          <input
                            type="text"
                            name="city"
                            value={userDetails.city}
                            onChange={handleChange}required
                          />
                        </div>

                        <div className='col-6'>
                          <label>Skills: </label>
                        </div>
                        <div className='col-6'>
                          <input
                            type="text"
                            name="skills"
                            value={userDetails.skills}
                            onChange={handleChange}required
                          />
                        </div>

                        <div className='col-6'>
                          <label>Address: </label>
                        </div>
                        <div className='col-6'>
                          <input
                            type="text"
                            name="address"
                            value={userDetails.address}
                            onChange={handleChange}required
                          />
                        </div>

                        <div className='col-6'>
                          <label>Phone Number: </label>
                        </div>
                        <div className='col-6'>
                          <input
                            type="text"
                            name="phone"
                            value={userDetails.phone}
                            onChange={handleChange}required
                          />
                          {errors.phone && <p className="error">{errors.phone}</p>}
                        </div>

                        <div className='col-6'>
                          <label>Email: </label>
                        </div>
                        <div className='col-6'>
                          <input
                            type="email"
                            name="email"
                            value={userDetails.email}
                            onChange={handleChange}required
                          />
                          {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className='profileupdatebutton'>Save</button>
              </form>
            ) : (
              <>
                <div className='profile-field container'>
                  <div className='row'>
                    <div className='col-12 md-6 sm-6'>
                      <div className='row'>
                        <div className='col-6'>Name</div>
                        <div className='col-6 profile-vol-content'><p>: {userDetails.name}</p></div>
                        <div className='col-6'>Age</div>
                        <div className='col-6 profile-vol-content'><p>: {userDetails.age}</p></div>
                        <div className='col-6'>City</div>
                        <div className='col-6 profile-vol-content'><p>: {userDetails.city}</p></div>
                        <div className='col-6'>Skills</div>
                        <div className='col-6 profile-vol-content'><p>: {userDetails.skills}</p></div>
                        <div className='col-6'>Address</div>
                        <div className='col-6 profile-vol-content'><p>: {userDetails.address}</p></div>
                        <div className='col-6'>Phone Number</div>
                        <div className='col-6 profile-vol-content'><p>: {userDetails.phone}</p></div>
                        <div className='col-6'>Email</div>
                        <div className='col-6 profile-vol-content'><p>: {userDetails.email}</p></div>
                      </div>
                      <div className='vol-profile-button'>
                        <div>
                          <button onClick={handleEditClick} className='profileupdatebutton'>Edit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rescueprofile