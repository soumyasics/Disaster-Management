import React from 'react'
import '../Updatealert/UpdateViewalert.css'
import Back_img from '../../../../Assets/Group.png';
import AlertView_img1 from '../../../../Assets/Rectangle 279.png';
import AlertView_img2 from '../../../../Assets/Rectangle 280.png';

function UpdateViewalert() {
    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <div className='col-lg-8 col-md-8 col-sm-8'>
                    <div className='row border shadow-lg rounded-4 mb-5'>
                        <div className='col-lg-12 col-md-8 col-sm-8 p-3'>
                           <a href='#'><img className='Back_Viewimg mt-3 ms-3' src={Back_img} /></a> 
                            <div className='continer mt-5 ms-5 mx-5 m'>
                                <form>
                                    <div className='row'>
                                        <div className='col mb-3'>
                                            <label className='form_text'>Gmail</label>
                                            <input type='text' className='focus-ring focus-ring-success border form-control' placeholder='abc@gmail. com ' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-6'>
                                            <label className='form_text'>Incident</label>
                                            <input type='text' className='focus-ring focus-ring-success border form-control' placeholder=' Rain ' />
                                        </div>
                                        <div className='col-6'>
                                            <label className='form_text'>Category</label>
                                            <input type='text' className='focus-ring focus-ring-success border form-control ' placeholder=' Flood ' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-6'>
                                            <label className='form_text'>Location</label>
                                            <input type='text' className='focus-ring focus-ring-success border form-control ' placeholder='kollam' />
                                        </div>
                                        <div className='col-6'>
                                            <label className='form_text'>Date</label>
                                            <input type='text' className='focus-ring focus-ring-success border form-control ' placeholder=' 11/09/2023 ' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-6'>
                                            <label className='form_text'>Reporter Name</label>
                                            <input type='text' className='focus-ring focus-ring-success border form-control' placeholder=' Abu Salim ' />
                                        </div>
                                        <div className='col-6'>
                                            <label className='form_text'>Status</label>
                                            <input type='text' className='focus-ring focus-ring-success border form-control ' placeholder='Critical ' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-6'>
                                            <label className='form_text d-flex'>Add Photos</label>
                                            <img className='AlertView_img img-fluid col-12' src={AlertView_img1} />
                                        </div>
                                        <div className='col-6'>
                                            <label className='form_text d-flex'>Add Vedios</label>
                                            <img className='AlertView_img img-fluid col-12' src={AlertView_img2} />                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 mb-3'>
                                        <button className='submit_btn_bg submit_btn_text'> Update</button>
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