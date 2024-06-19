import React, { useState } from 'react'
import "./SignUp.css"
import fireimg from "../../../Assets/fire-image.png";
import logo from '../../../Assets/WebGuard-Logo.png'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import axiosInstance from '../../Constants/Baseurl';

function SignUp() {
    const [data,setData]=useState({
        name:'',
        phone:'',
        email:'',
        address:'',
        password:'',
        confirmPassword: ''
    })

    const [errors,setErrors]=useState({
        name:'',
        phone:'',
        email:'',
        address:'',
        password:'',
        confirmPassword: ''
    })

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

      const handleSubmit=async (event)=>{
        event.preventDefault();

        let errors={};
        let formIsValid=true;

        errors.name=validateString('Name', data.name);
        errors.phone = validateContact('Phone Number', data.phone);
        errors.email = validateEmail('Email', data.email);
        errors.address = validateField('Address', data.address);
        errors.password = validateField('Password', data.password);

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
              const res = await axiosInstance.post('/registeruser', formData);
              if (res.data.status === 200) {
                alert('User registered successfully');
              } else {
                alert(`User Registration Failed: ${res.data.msg}`);
              }
            } catch (error) {
            console.error('There was an error!', error);
            if (error.response && error.response.data) {
                const { status, msg } = error.response.data;
                if (status === 11000) {
                alert(`Volunteer Registration Failed: ${msg}`);
                } else {
                alert('Registration Failed');
                }
            } else {
                alert('Error');
            }
            }
            
          }
      }

    return (
        <div >
        <Navbar/>
      <div className='user-login-header'>
        “Communities rising together from disaster”
      </div>
      <div className='row login-row-style'>
        <div className='col-lg-5 col-md-3 col-sm-12'>
            <div className='image-stack'>
                <img src={fireimg} className='image first-image' alt='Fire 1' />
            </div>
        </div>
        <div className='col-lg-7 col-md-6 col-sm-12'>
          <div className='box-style-user-signup'>
            <form onSubmit={handleSubmit}>
                <div className='logo-section'>
                    <img src={logo}/>
                    <p>Sign Up</p>
                </div>
            <div className='col-12 pb-3'>
                <div className='row'>
                    <div className='col-6'>
                        <p className='loginuser'>Name:</p>
                        <input type='text' 
                        className='form-control signup-input-type-change' 
                        placeholder='Enter Name' 
                        name='name'
                        value={data.name}
                        onChange={handleChange}
                        />
                    {errors.name && <div className="text-danger">{errors.name}</div>}

                    </div>
                    <div className='col-6'>
                        <p className='loginuser'>Phone Number:</p>
                        <input type='text' 
                        className='form-control signup-input-type-change' 
                        placeholder='Enter Phone Number' 
                        name='phone'
                        value={data.phone}
                        onChange={handleChange}
                        />
                    {errors.phone && <div className="text-danger">{errors.phone}</div>}

                    </div>
                </div>
                <div className='row'>
                <div className='col-12'>
                        <p className='signinuser'>Email Id:</p>
                        <input type='email' 
                        className='form-control signup-input-type-change' 
                        placeholder='Enter Email Id' 
                        name='email'
                        value={data.email}
                        onChange={handleChange}
                        />
                    {errors.email && <div className="text-danger">{errors.email}</div>}

                    </div>
                </div>
                <div className='col-12'>
                        <p className='signinuser'>Address:</p>
                        <input type='text' 
                        className='form-control signup-input-type-change' 
                        placeholder='Enter Address' 
                        name='address'
                        value={data.address}
                        onChange={handleChange}
                        />
                    {errors.address && <div className="text-danger">{errors.address}</div>}

                </div>
                <div className='row'>
                    <div className='col-6'>
                        <p className='signinuser'>Password:</p>
                        <input type='password' 
                        className='form-control signup-input-type-change' 
                        placeholder='Enter Password' 
                        name='password'
                        value={data.password}
                        onChange={handleChange}
                        />
                    {errors.password && <div className="text-danger">{errors.password}</div>}

                    </div>
                    <div className='col-6'>
                        <p className='signinuser'>Conform Password:</p>
                        <input type='password' 
                        className='form-control signup-input-type-change' 
                        placeholder='Re-enter Password' 
                        name='confirmPassword'
                        value={data.confirmPassword}
                        onChange={handleChange}
                        />
                    {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}

                    </div>
                </div>
                <button className='btn btn-primary button-style'>Register</button>
            </div>
            <p className='p-style-user'>Already Have an account? <Link to='/user_login' className='link-style-change-user'>Login</Link></p>

            </form>
          </div>
        </div>
      </div><Footer/>

        </div>
    )
}

export default SignUp
