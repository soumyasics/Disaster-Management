import React, { useRef } from 'react';
import './Addalerts.css';
import { TbArrowBackUp } from "react-icons/tb";
import { FaImage } from "react-icons/fa6";

function Addalerts() {

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='container addalert_main_div'>
      <form>
        <div className='addalert_box'>
          <div className='row addalert_row'>
            <div className='col-1'>
              <TbArrowBackUp className='add_alert_icon'/>
            </div>
            <div className='col-5'>
              <div className='addalert_title_div'>
                <p>Alert Title</p>
                <input type='text' 
                        className='form-control addalert-input-type-change' 
                        placeholder='Enter Alert Title' 
                        name='name'
                        />
              </div>
            </div>
            <div className='col-5'>
              <div className='addalert_title_div'>
                  <p>Date & Time</p>
                  <input type='datetime-local' 

                          className='form-control addalert-input-type-change' 
                          placeholder='DD/MM/YYYY   &   00:00 AM / PM' 
                          name='name'
                          
                          />
              </div>
            </div>
          </div>

          <div className='row addalert_row'>
            <div className='col-1'></div>
            <div className='col-10'>
              <div className='addalert_title_div'>
                <p>Description</p>
                <input type='text' 
                        className='form-control addalert-input-type-change' 
                        placeholder='Enter Alert Description' 
                        name='name'
                        />
              </div>
            </div>
          </div>

          <div className='row addalert_row'>
            <div className='col-1'></div>
            <div className='col-5'>
              <div className='addalert_title_div'>
                <p>Category</p>
                <input type='text' 
                        className='form-control addalert-input-type-change' 
                        placeholder='Enter Alert Category' 
                        name='name'
                        />
              </div>
            </div>
            <div className='col-5'>
              <div className='addalert_title_div'>
                <p>Alert Location</p>
                <input type='text' 
                        className='form-control addalert-input-type-change' 
                        placeholder='Enter Alert Location' 
                        name='name'
                        />
              </div>
            </div>
          </div>

          <div className='row addalert_row'>
            <div className='col-1'></div>
            <div className='col-5'>
              <div className='addalert_title_div'>
                <p>Immediate Needs</p>
                <input type='text' 
                        className='form-control addalert-input-type-change' 
                        placeholder='Enter Immediate Needs' 
                        name='name'
                        />
              </div>
            </div>
            <div className='col-5'>
              <div className='addalert_title_div'>
                <p>Severity Level</p>
                <input type='text' 
                        className='form-control addalert-input-type-change' 
                        placeholder='Enter Severity Level' 
                        name='name'
                        />
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
                />
              </div>
            </div>
          </div>

          <div className='row addalert_button_div'>
            <div className='col-12'>
              <button className='btn btn-primary btn-style-change' type='submit'>Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Addalerts;
