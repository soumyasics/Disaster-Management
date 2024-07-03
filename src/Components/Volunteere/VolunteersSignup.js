import React, { useState } from 'react';
import fireimg from "../../Assets/volunteer-signup.png";
import logo from '../../Assets/WebGuard-Logo.png'
import "./VolunteersSignup.css"
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../Constants/Baseurl';
import Navbar from '../Common/NavBar/Navbar';
import Footer from '../Common/Footer/Footer';
import FooterSecond from '../Common/Footer/FooterSecond';
import {FiEye, FiEyeOff } from "react-icons/fi";


function VolunteersSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate=useNavigate()

  const [data, setData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    skills: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    skills: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  function validateString(fieldName, value) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!value.trim()) {
      return `${fieldName} is required`;
    } else if (!nameRegex.test(value)) {
      return `${fieldName} should not contain any numerical value`;
    }
    return '';
  }

  function validateNumber(fieldName, value, length = null) {
    if (!value.trim()) {
      return `${fieldName} is required`;
    } else if (isNaN(value)) {
      return `${fieldName} must be a number`;
    } else if (length && value.length !== length) {
      return `${fieldName} must be ${length} digits long`;
    }
    return '';
  }

  function validateField(fieldName, value) {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }
    return '';
  }

  function validateContact(fieldName, value) {
    const contactRegex = /^[0-9]+$/;
    if (!value.trim()) {
      return `${fieldName} is required`;
    } else if (!contactRegex.test(value) || value.length !== 10) {
      return 'Please enter a valid Contact Number';
    }
    return '';
  }

  function validateEmail(fieldName, value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) {
      return `${fieldName} is required`;
    } else if (!emailPattern.test(value)) {
      return 'Invalid email format';
    }
    return '';
  }

  const handleSubmit =async (event) => {
    event.preventDefault();
  
    let errors = {};
    let formIsValid = true;
  
    errors.name = validateString('Name', data.name);
    errors.age = validateNumber('Age', data.age);
    errors.gender = validateField('Gender', data.gender);
    errors.phone = validateContact('Phone Number', data.phone);
    errors.address = validateField('Address', data.address);
    errors.city = validateString('City', data.city);
    errors.state = validateString('State', data.state);
    errors.skills = validateField('Skills/Expertise', data.skills);
    errors.email = validateEmail('Email', data.email);
    errors.password = validateField('Password', data.password);
    errors.confirmPassword = data.password !== data.confirmPassword ? 'Passwords do not match' : '';
  
    setErrors(errors);
  
    for (let key in errors) {
      if (errors[key]) {
        formIsValid = false;
        break;
      }
    }
  
    if (formIsValid) {
      const formData = new FormData();
      for (let key in data) {
        formData.append(key, data[key]);
      }
  
      try {
        console.log(data)
        const res = await axiosInstance.post('/registervolunteer', formData);
        console.log(res);
        if (res.data.status === 200) {
          alert('Volunteer registered successfully');
          navigate("/volunteers_login")
        } else if(res.data.status === 11000) {
          alert(`Volunteer Registration Failed: ${res.data.msg}`);
        }
        else{
            alert("Registration Failed")
        }
      } catch (error) {
        console.error('There was an error!', error);
        if (error.response) { 
          if (error.response.status === 409) { 
            alert(`Validation Error: ${error.response.data.msg}`); 
          } else {
            alert(`Error: ${error.response.data.msg}`); 
          }
        } else {
          alert('Error');
        }
      }
    }
  };
  
  return (
    <div>
      <Navbar/>
      <div className='user-login-header'>
        “Communities rising together from disaster”
      </div>
      <div className='row login-row-style'>
        <div className='col-lg-5 col-md-3 col-sm-12'>
            <div className='image-stack'>
                <img src={fireimg} className='image first-image vol-signup-img' alt='Fire 1' />
            </div>
        </div>
        <div className='col-lg-7 col-md-6 col-sm-12'>
          <div className='box-style-vol-signup'>
            <form onSubmit={handleSubmit}>
                <div className='logo-section'>
                    <img src={logo} alt="Logo"/>
                    <p>Sign Up Volunteer</p>
                </div>
                <div className='col-12 pb-3'>
                  <div className='row'>
                    <div className='col-6'>
                      <p className='signinuser'>Name:</p>
                      <input type='text' className='form-control signup-input-type-change' placeholder='Enter Name' name='name' value={data.name} onChange={handleChange}/>
                      {errors.name && <div className="text-danger">{errors.name}</div>}
                    </div>
                    <div className='col-6'>
                      <p className='signinuser'>Age:</p>
                      <input type='text' className='form-control signup-input-type-change' placeholder='Enter Age' name='age' value={data.age} onChange={handleChange}/>
                      {errors.age && <div className="text-danger">{errors.age}</div>}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-6'>
                      <p className='signinuser'>Gender:</p>
                      <input type='text' className='form-control signup-input-type-change' placeholder='Enter Your Gender' name='gender' value={data.gender} onChange={handleChange}/>
                      {errors.gender && <div className="text-danger">{errors.gender}</div>}
                    </div>
                    <div className='col-6'>
                      <p className='signinuser'>Phone Number:</p>
                      <input type='text' className='form-control signup-input-type-change' placeholder='Enter Phone Number' name='phone' value={data.phone} onChange={handleChange}/>
                      {errors.phone && <div className="text-danger">{errors.phone}</div>}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-6'>
                      <p className='signinuser'>Address:</p>
                      <input type='text' className='form-control signup-input-type-change' placeholder='Enter Address' name='address' value={data.address} onChange={handleChange}/>
                      {errors.address && <div className="text-danger">{errors.address}</div>}
                    </div>
                    <div className='col-6'>
                      <p className='signinuser'>City:</p>
                      <input type='text' className='form-control signup-input-type-change' placeholder='Enter City' name='city' value={data.city} onChange={handleChange}/>
                      {errors.city && <div className="text-danger">{errors.city}</div>}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-6'>
                      <p className='signinuser'>State:</p>
                      <input type='text' className='form-control signup-input-type-change' placeholder='Enter State' name='state' value={data.state} onChange={handleChange}/>
                      {errors.state && <div className="text-danger">{errors.state}</div>}
                    </div>
                    <div className='col-6'>
                      <p className='signinuser'>Skills/Expertise:</p>
                      <input type='text' className='form-control signup-input-type-change' placeholder='Enter Skills/Expertise' name='skills' value={data.skills} onChange={handleChange}/>
                      {errors.skills && <div className="text-danger">{errors.skills}</div>}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                      <p className='signinuser'>Email Id:</p>
                      <input type='email' className='form-control signup-input-type-change' placeholder='Enter Email Id' name='email' value={data.email} onChange={handleChange}/>
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-6 position-relative'>
                      <p className='signinuser'>Password:</p>
                      <div className='input-wrapper wrapper-style'>
                      <input 
                      type={showPassword ? "text" : "password"} 
                      className='form-control signup-input-type-change' 
                      placeholder='Enter Password' name='password' 
                      value={data.password} 
                      onChange={handleChange}
                      />
                      <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </div>
                      </div>
                      {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>
                    <div className='col-6 position-relative'>
                        <p className='signinuser'>Conform Password:</p>
                        <div className="input-wrapper position-relative">
                        <input type={showConfirmPassword ? "text" : "password"}
                        className='form-control signup-input-type-change' 
                        placeholder='Re-enter Password' 
                        name='confirmPassword'
                        value={data.confirmPassword}
                        onChange={handleChange}
                        />
                    <div className="password-toggle-icon" onClick={toggleConfirmPasswordVisibility}>
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </div>

                    {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                  </div>
                    </div>

                  </div>
                  <div className='text-center pt-3'>
                    <button className='btn btn-primary btn-style-change' type='submit'>Register</button>
                  </div>
                  <div className='text-center pt-3'>
                  <p className='p-style-vol'>Already Have an account? <Link to='/volunteers_login' className='link-style-change-volen'>Login</Link></p>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
      <Footer /><FooterSecond/>
    </div>
  );
}

export default VolunteersSignup;
