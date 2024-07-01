import React, { useRef, useState } from 'react';
import './Addalerts.css';
import { TbArrowBackUp } from "react-icons/tb";
import { FaImage } from "react-icons/fa";
import axiosInstance from '../../Constants/Baseurl';

function Addalerts() {
  const userid='667284c5f73eccf56a619f81'
  const fileInputRef = useRef(null);
  const [data, setData] = useState({
    title: '',
    date: '',
    discription: '',
    caterory: '',
    location: '',
    needs: '',
    securitylevel: '',
    image: '',
    userid:userid
  });
  const [errors, setErrors] = useState({
    title: '',
    date: '',
    discription: '',
    caterory: '',
    location: '',
    needs: '',
    securitylevel: '',
    image: ''
  });

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: '' }); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;
    let newErrors = {};

    if (!data.title.trim()) {
      newErrors.title = 'Alert Title is required';
      formIsValid = false;
    }

    if (!data.date.trim()) {
      newErrors.date = 'Date & Time is required';
      formIsValid = false;
    }

    if (!data.discription.trim()) {
      newErrors.discription = 'Description is required';
      formIsValid = false;
    }

    if (!data.caterory.trim()) {
      newErrors.caterory = 'Category is required';
      formIsValid = false;
    }

    if (!data.location.trim()) {
      newErrors.location = 'Alert Location is required';
      formIsValid = false;
    }

    if (!data.needs.trim()) {
      newErrors.needs = 'Immediate Needs is required';
      formIsValid = false;
    }

    if (!data.securitylevel.trim()) {
      newErrors.securitylevel = 'Security Level is required';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('date', data.date);
      formData.append('discription', data.discription);
      formData.append('caterory', data.caterory);
      formData.append('location', data.location);
      formData.append('needs', data.needs);
      formData.append('securitylevel', data.securitylevel);
      formData.append('image', data.image); 
      formData.append("userid",data.userid)

      axiosInstance.post('/addemergency', formData)
        .then(response => {
          console.log('Response:', response.data);
          alert('Alert added successfully!');
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Failed to add alert. Please try again.');
        });
    
    }
  };

  return (
    <div className='container addalert_main_div'>
      <form onSubmit={handleSubmit}>
        <div className='addalert_box'>
          <div className='row addalert_row'>
            <div className='col-1'>
              <TbArrowBackUp className='add_alert_icon'/>
            </div>
            <div className='col-5'>
              <div className='addalert_title_div'>
                <p>Alert Title</p>
                <input 
                  type='text' 
                  className={`form-control addalert-input-type-change ${errors.title ? 'is-invalid' : ''}`} 
                  placeholder='Enter Alert Title' 
                  name='title' 
                  value={data.title} 
                  onChange={handleInputChange}
                />
                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
              </div>
            </div>
            <div className='col-5'>
              <div className='addalert_title_div'>

              </div>
            </div>
          </div>

          <div className='row addalert_row'>
            <div className='col-1'></div>
            <div className='col-10'>
              <div className='addalert_title_div'>
                <p>Description</p>
                <input 
                  type='text' 
                  className={`form-control addalert-input-type-change ${errors.description ? 'is-invalid' : ''}`} 
                  placeholder='Enter Alert Description' 
                  name='discription' 
                  value={data.discription} 
                  onChange={handleInputChange}
                />
                {errors.discription && <div className="invalid-feedback">{errors.description}</div>}
              </div>
            </div>
          </div>

          <div className='row addalert_row'>
            <div className='col-1'></div>
            <div className='col-5'>
              <div className='addalert_title_div'>
                <p>Category</p>
                <input 
                  type='text' 
                  className={`form-control addalert-input-type-change ${errors.caterory ? 'is-invalid' : ''}`} 
                  placeholder='Enter Alert Category' 
                  name='caterory' 
                  value={data.caterory} 
                  onChange={handleInputChange}
                />
                {errors.caterory && <div className="invalid-feedback">{errors.caterory}</div>}
              </div>
            </div>
            <div className='col-5'>
              <div className='addalert_title_div'>
                <p>Alert Location</p>
                <input 
                  type='text' 
                  className={`form-control addalert-input-type-change ${errors.location ? 'is-invalid' : ''}`} 
                  placeholder='Enter Alert Location' 
                  name='location' 
                  value={data.location} 
                  onChange={handleInputChange}
                />
                {errors.location && <div className="invalid-feedback">{errors.location}</div>}
              </div>
            </div>
          </div>

          <div className='row addalert_row'>
            <div className='col-1'></div>
            <div className='col-5'>
              <div className='addalert_title_div'>
                <p>Immediate Needs</p>
                <input 
                  type='text' 
                  className={`form-control addalert-input-type-change ${errors.needs ? 'is-invalid' : ''}`} 
                  placeholder='Enter Immediate Needs' 
                  name='needs' 
                  value={data.needs} 
                  onChange={handleInputChange}
                />
                {errors.needs && <div className="invalid-feedback">{errors.needs}</div>}
              </div>
            </div>
            <div className='col-5'>
              <div className='addalert_title_div'>
                <p>Security Level</p>
                <input 
                  type='text' 
                  className={`form-control addalert-input-type-change ${errors.securitylevel ? 'is-invalid' : ''}`} 
                  placeholder='Enter Security Level' 
                  name='securitylevel' 
                  value={data.securitylevel} 
                  onChange={handleInputChange}
                />
                {errors.securitylevel && <div className="invalid-feedback">{errors.securitylevel}</div>}
              </div>
            </div>
          </div>

          <div className='row addalert_row'>
            <div className='col-1'></div>
            <div className='col-5'>
              <div className='addalert_photo_div'>
                <p>Add Photos</p>
                <div className='upload_icon' onClick={handleIconClick}>
                  <FaImage className='addalert_image_icon' />
                </div>
                <input 
                  type='file' 
                  ref={fileInputRef} 
                  className='addalert_image_style'
                  accept="image/*"
                  onChange={(e) => setData({ ...data, image: e.target.files[0] })}
                />
              </div>
            </div>
          </div>

          <div className='row addalert_button_div'>
            <div className='col-12'>
              <button className='btn btn-primary btn-style-change' type='submit'>Send</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Addalerts;
