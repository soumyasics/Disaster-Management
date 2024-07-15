import React, { useState } from 'react'
import '../Updatealert/UpdateViewalert.css'
import Back_img from '../../../../Assets/Group.png';


function UpdateViewalert() {
    const [userDetails, setUserDetails] = useState({
        email: "",
        incident: "",
        category: "",
        location: "",
        reportername: "",
        status: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        incident: "",
        category: "",
        location: "",
        reportername: "",
        status: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails,[name]: value, });
    };

    const validate = () => {

        let formErrors = {};

        // Email validation
        if (!userDetails.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
            formErrors.email = 'Email is invalid';
        }

        //Incident Validation
        if(!userDetails.incident){
            formErrors.incident='Enter the Category'
        }else{
            userDetails.incident='';
        }

        //Category Validation
        if(!userDetails.category){
            formErrors.category='Enter the Category'
        }
        else{
            userDetails.category='';
        }
        
        // Location Validation
        if(!userDetails.location){
            formErrors.location='Enter the Location'
        }else{
            userDetails.location='';
        }

        // Reporter validation
        if(!userDetails.reportername){
            formErrors.reportername='Enter the Reporter Name'
        }
        else{
            userDetails.reportername='';
        }

        // Status Validation
        if(!userDetails.status){
            formErrors.status='Enter the Status'
        }
        else{
            userDetails.status='';
        }

        setErrors(formErrors);
        
    };

    const handleSave = (e) => {
        e.preventDefault();
        setErrors({});
        if (validate()) {   
        }
    };
    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <div className='col-lg-8 col-md-8 col-sm-8'>
                    <div className='row border shadow-lg rounded-4 mb-5'>
                        <div className='col-lg-12 col-md-8 col-sm-8 p-3'>
                            <a href='#'><img className='Back_Viewimg mt-3 ms-3' src={Back_img} /></a>
                            <div className='continer mt-5 ms-5 mx-5 m'>
                                <form onSubmit={handleSave}>
                                    <div className='row'>
                                        <div className='col mb-3'>
                                            <label className='form_text'>Gmail</label>
                                            <input type='text' className='focus-ring focus-ring-success border form-control' name="email" value={userDetails.email} onChange={handleChange} placeholder='abc@gmail. com '  />
                                            {errors.email&&(<span className='text-danger'>{errors.email}</span>)}
                                            
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-6'>
                                            <label className='form_text'>Incident</label>
                                            <input type='text' className='focus-ring focus-ring-success border form-control' placeholder=' Rain ' name='incident' value={userDetails.incident} onChange={handleChange}/>
                                            {errors.incident && (<span className='text-danger'>{errors.incident}</span>)}
                                        </div>
                                        <div className='col-6'>
                                            <label className='form_text'>Category</label>
                                            <input type='text' className='focus-ring focus-ring-success border form-control ' placeholder=' Flood ' name='category' value={userDetails.category} onChange={handleChange}/>
                                            {errors.category && (<span className='text-danger'>{errors.category}</span>)}
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-6'>
                                            <label className='form_text'>Location</label>
                                            <input type='text' className='focus-ring focus-ring-success border form-control ' placeholder='kollam' name='location' value={userDetails.location} onChange={handleChange}/>
                                            {errors.location && (<span className='text-danger'>{errors.location}</span>)}
                                        </div>
                                        <div className='col-6'>
                                            <label className='form_text'>Date</label>
                                            <input type='date' className='focus-ring focus-ring-success border form-control ' placeholder=' 11/09/2023 ' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-6'>
                                            <label className='form_text'>Reporter Name</label>
                                            <input type='text' className='focus-ring focus-ring-success border form-control' placeholder=' Abu Salim ' name='reportername' value={userDetails.reportername} onChange={handleChange} />
                                            {errors.reportername && (<span className='text-danger'>{errors.reportername}</span>)}
                                        </div>
                                        <div className='col-6'>
                                            <label className='form_text'>Status</label>
                                            <input type='text' className='focus-ring focus-ring-success border form-control ' placeholder='Critical ' name='status' value={userDetails.status} onChange={handleChange} />
                                            {errors.status && (<span className='text-danger'>{errors.status}</span>)}
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-12'>
                                            <label className='form_text d-flex'>Add Photos</label>
                                            <input type='file' className='form-control'/>
                                        </div>
                                       
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 mb-3 d-grid gap-2'>
                                        <button type='submit' className='submit_btn_bg submit_btn_text '> Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateViewalert