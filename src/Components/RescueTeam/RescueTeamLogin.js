import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'
import fireimg from "../../Assets/rescue.png";
import logo from '../../Assets/WebGuard-Logo.png'
import "./RescueTeamLogin.css"
import Navbar from '../Common/NavBar/Navbar';
import FooterSecond from '../Common/Footer/FooterSecond';
import Footer from '../Common/Footer/Footer';
import { FiEdit2, FiEye, FiEyeOff } from "react-icons/fi";
import axiosInstance from '../Constants/Baseurl';


function RescueTeamLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [data, setData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [formIsValid, setFormIsValid] = useState(true);
  const navigate=useNavigate()


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

const validateField = (fieldName, value) => {
  if (!value.trim()) {
      setFormIsValid(false);
      return `${fieldName} is required`;
  }
  return '';
};

const handleSubmit = (event) => {
event.preventDefault();
let errors = {};
let formIsValid = true;

errors.email = validateField('Email', data.email);
if (errors.email) formIsValid = false;

errors.password = validateField('Password', data.password);
if (errors.password) formIsValid = false;

setErrors(errors);
setFormIsValid(formIsValid);

if (formIsValid) {
    console.log("data", data);
    axiosInstance.post('/rescuememberslogin', data)
        .then(response => {
            console.log("Response:", response);
            if (response.data.status === 200) {
                console.log("Login Successful");
                alert("Login Successful");
                localStorage.setItem('rescueId',response.data.data._id)
                navigate("/rescueperson_home")
            } else {
                console.log("Login Failed");
                alert(response.data.msg);
            }
        })
        .catch(error => {
            console.error("There was an error!", error);
        });
}
};

    return (
      
        <div>
    <Navbar/>
      <div className='res-login-header'>
        “Communities rising together from disaster”
      </div>
      <div className='row res-login-row-style'>
        <div className='col-lg-5 col-md-3 col-sm-12'>
            <div className='image-stack'>
                <img src={fireimg} className='image first-image1' alt='Fire 1' />
            </div>
        </div>
        <div className='col-lg-7 col-md-6 col-sm-12'>
          <div className='box-style-login-res'>
            <form onSubmit={handleSubmit}>
                <div className='res-logo-section'>
                    <img src={logo} />
                    <p>Rescue Member Login</p>
                </div>
            <div className='col-12 pb-3'>
                    <p className='login-res'>Email:</p>
                    <input type='text' 
                    className='form-control input-type-change-res' 
                    placeholder='Enter Email' 
                    name='email'
                    value={data.email}
                    onChange={handleChange}
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                    
                    </div>
                    <div className='col-12 pb-3'>
                    <p className='login-res'>Password:</p>
                    <div className="input-wrapper wrapper-style">
                    <input type={showPassword ? "text" : "password"} 
                    className='form-control input-type-change-res' 
                    placeholder='Enter password' 
                    name='password'
                    value={data.name}
                    onChange={handleChange}
                    />
                    {errors.password && <div className="text-danger">{errors.password}</div>}

                    <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </div>
                    </div>
                    <div className='div-left-res'>
                        <Link className='link-style-change-res' to="/forgot-passsword">Forgot Password?</Link>
                    </div>
                    </div>
                    <div className='col-12 pb-3'>
                        <button className='btn btn-primary res-btn-style-change' type='submit'>Login</button>
                    </div>
                    {/* <p className='p-style-vol'>Don't Have an account? <Link to='/rescueperson_signup' className='link-style-change-volen'>Sign Up</Link></p> */}

            </form>
          </div>
        </div>
      </div><Footer/><FooterSecond/>
        </div>

    )
}

export default RescueTeamLogin