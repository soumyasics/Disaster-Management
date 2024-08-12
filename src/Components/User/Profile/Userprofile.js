import React, { useEffect, useState } from 'react';
import "./Userprofile.css";
import axiosInstance from '../../Constants/Baseurl';

function Userprofile() {
  const [isEditing, setIsEditing] = useState(false);
  const userid = localStorage.getItem("usersId");
  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
console.log(userDetails);
  const handleSave = (e) => {
    e.preventDefault();
    axiosInstance.post(`editusrprofile/${userid}`, userDetails)
      .then((res) => {
        console.log(res);
        if(res.data.status==200){
          setIsEditing(false);
          alert('Profile Updated')
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosInstance.post(`viewuserbyid/${userid}`)
      .then((res) => {
        console.log(res);
        setUserDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userid]);

  return (
    <div className='container'>
      <div className='user-profilemain'>
        <div className='user-profileinside'>
          <div className='user-profiletop '>
            <p >Profile</p>
            {/* <h5 className='ri-close-line'></h5> */}
          </div>
          <div className='user-profiledetails'>
            {isEditing ? (
              <form onSubmit={handleSave}>
                <div className='profile-field'>
                  <label>Name: </label>
                  <input 
                    type="text" 
                    name="name" 
                    value={userDetails.name} 
                    onChange={handleChange} 
                  />
                </div>
                <div className='profile-field'>
                  <label>Address: </label>
                  <input 
                    type="text" 
                    name="address" 
                    value={userDetails.address} 
                    onChange={handleChange} 
                  />
                </div>
                <div className='profile-field'>
                  <label>Phone Number: </label>
                  <input 
                    type="text" 
                    name="phone" 
                    value={userDetails.phone} 
                    onChange={handleChange} 
                  />
                </div>
                <div className='profile-field'>
                  <label>Email: </label>
                  <input 
                    type="email" 
                    name="email" 
                    value={userDetails.email} 
                    onChange={handleChange} 
                  />
                </div>
                <button type="submit" className='profileupdatebutton'>Save</button>
              </form>
            ) : (
              <>
                <div className='profile-field'>
                  <label>Name: </label>
                  <span>{userDetails.name}</span>
                </div>
                <div className='profile-field'>
                  <label>Address: </label>
                  <span>{userDetails.address}</span>
                </div>
                <div className='profile-field'>
                  <label>Phone Number: </label>
                  <span>{userDetails.phone}</span>
                </div>
                <div className='profile-field'>
                  <label>Email: </label>
                  <span>{userDetails.email}</span>
                </div>
                <button onClick={handleEditClick} className='profileupdatebutton'>Edit</button>
                
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
