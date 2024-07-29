import React, { useState,useEffect } from 'react'
import './PrivacyPolicy.css'
import {FaPlus ,FaPlusCircle} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../Constants/Baseurl'
import { toast } from 'react-toastify'

function PrivacyPolicy() {
    const navigate = useNavigate();
    const navigateToEdit=(()=>{
        navigate('/admin-edit-privacypolicy')
    })
    const [data,setData]=useState({
        privacypolicy:''
    })
    const [errors,setErrors]=useState({
        privacypolicy:''
    })

    const handleChange =((e)=>{
        const {name,value}= e.target;
        setData(prevData=>({
            ...prevData,
            [name]:value
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
          }));
    })

    console.log('Data:',data);
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let errors = {};
    
        let formValid = true;
    
        if (!data.privacypolicy.trim()) {
          formValid = false;
          errors.privacypolicy = "Privacy Policy is required";
    
        }
        setErrors(errors);
    
        if (
            data.privacypolicy
            
        ){
          formValid = true;
        }
    
        if (Object.keys(errors).length === 0 && formValid) {
          try {
            var response;
            if (data) {
              response = await axiosInstance.post(
                "/addPrivacyPolicy",
                data
              );
            }
            console.log("Response:", response);
            if (response.status == 200) {
              toast.success(response.data.msg);
            }
          } catch (error) {
            console.error("Error:", error);
            let msg = error?.response?.data?.msg || "Error occurred";
            alert(msg);
          }
        } else {
          console.log("Form is not valid", formValid);
          console.log("Data entered", data);
        }
      };

        

  return (
    <>
        <div className='container'>
            <div style={{display:'flex',marginTop:'50px',gap:'900px'}}>
                <div className='pp-head'>
                    <h5>Privacy Policy</h5>
                </div>
                {/* <div >
                    <button className='pp-update-btn' onClick={navigateToEdit}>
                            Update
                    </button>
                </div> */}
            </div>
            
            <form onSubmit={(e)=>{handleSubmit(e);}}>
            <div className='pp-body'>
                <h6 style={{color:'#017178'}}>
                    Privacy policy 
                </h6>
                <textarea style={{width:'1200px',height:'500px'}} 
                onChange={handleChange}
                name='privacypolicy'
                />
                {errors && <div className='text-danger'><p>{errors.privacypolicy}</p></div>}
                <div className='mt-3' style={{display:'flex',justifyContent:'center'}}>
                <button className='pp-update-btn'>Add Policy</button>
            </div>
            </div>
            </form>
            
        </div>
    </>
  )
}

export default PrivacyPolicy