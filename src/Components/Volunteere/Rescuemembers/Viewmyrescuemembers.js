import React from 'react'
import '../Rescuemembers/Viewmyrescuemembers.css'
function Viewmyrescuemembers() {
    return (
        <div>
            <div className="container  mt-4">
                <div className="row mb-5">
                    <div className="searchnav-adminhomemain d-flex justify-content-end">
                        <div className="search-containeradminnav">
                            <i className="ri-search-line"></i>
                            <input
                                type="text"
                                className="search-inputadminnav"
                                placeholder="users"

                            />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className="row d-flex align-items-stretch border border-top-0 shadow-sm">
                        <div className='row'>
                            <p className='manageuser_bg manageuser_bg_text text-center '>Manage User</p>
                        </div>
                        <div className="col-1">
                            <p className='manageuser_text_head'>Si No</p>
                            <p className='manageuser_text_body'>dd</p>
                            <p className='manageuser_text_body'>dd</p>
                        </div>
                        <div className="col-2">
                            <p className='manageuser_text_head'>Username</p>
                            <p className='manageuser_text_body'>dd</p>
                            <p className='manageuser_text_body'>dd</p>
                        </div>
                        <div className="col-2 ps-4">
                            <p className='manageuser_text_head'>Phone Number</p>
                            <p className='manageuser_text_body'>dd</p>
                            <p className='manageuser_text_body'>dd</p>
                        </div>
                        <div className="col-2">
                            <p className='manageuser_text_head'>Gmail</p>
                            <p className='manageuser_text_body'>dd</p>
                            <p className='manageuser_text_body'>dd</p>
                        </div>
                        <div className="col-2">
                            <p className='manageuser_text_head'>Address</p>
                            <p className='manageuser_text_body'>dd</p>
                            <p className='manageuser_text_body'>dd</p>
                        </div>
                        <div className="col-3 mt-4 ">
                            <p></p>
                            {/* Modal */}
                            <button type="button" class="btn btn-success col-8 mb-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                                view
                            </button>
                            <button type="button" class="btn btn-success col-8 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                                view
                            </button>
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body ms-5 ">
                                            <div className='col-12  ms-3 p-2'>
                                                <div className='row '>
                                                    <div className='col-4'><p className='manageuser_modal_text'>Sio</p></div>
                                                    <div className='col-2'><p className='manageuser_modal_text'>:</p></div>
                                                    <div className='col-6'><p className='manageuser_modal_text'>1</p></div>
                                                </div>
                                                <div className='row '>
                                                    <div className='col-4'><p className='manageuser_modal_text'>Username</p></div>
                                                    <div className='col-2'><p className='manageuser_modal_text'>:</p></div>
                                                    <div className='col-6 text-break'><p className='manageuser_modal_text'>Ayrtytryyt</p></div>
                                                </div>
                                                <div className='row '>
                                                    <div className='col-4'><p className='manageuser_modal_text'>phoneNumber</p></div>
                                                    <div className='col-2'><p className='manageuser_modal_text'>:</p></div>
                                                    <div className='col-6 text-break'><p className='manageuser_modal_text'>1234567891</p></div>
                                                </div>
                                                <div className='row '>
                                                    <div className='col-4'><p className='manageuser_modal_text'>Gmail</p></div>
                                                    <div className='col-2'><p className='manageuser_modal_text'>:</p></div>
                                                    <div className='col-6 text-break'><p className='manageuser_modal_text'>abc@hamil.com</p></div>
                                                </div>
                                                <div className='row '>
                                                    <div className='col-4'><p className='manageuser_modal_text'>Address</p></div>
                                                    <div className='col-2'><p className='manageuser_modal_text'>:</p></div>
                                                    <div className='col-6 text-break'><p className='manageuser_modal_text'>Abcfweffewewftrtytrytryrytytrytrytrytrytrytr</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer d-flex justify-content-around">
                                            <button className='btn btn-outline-danger col-3 ri-close-circle-line'>Reject</button>
                                            <button type="button" className="btn btn-outline-success col-3 ri-checkbox-line">Aprove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewmyrescuemembers