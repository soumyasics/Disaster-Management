import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Constants/Baseurl';
import '../Complaints/AdminViewComplaints.css'
import Lottie from "lottie-react";  
import imglottiedata from "../../../Assets/nodatalottie.json"

function AdminViewComplaints() {
    const [data,setData]=useState('');
    
    useEffect(()=>{
        axiosInstance.post('viewallcomplaints')
        .then((data)=>{
            console.log(data);
            if(data.status===200){
                setData(data.data.data)
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <div className='col'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 shadow-lg  border-start border-4 border-danger mb-4'>
                            <div className='row'>
                                <p className='view_complaints_text view_complaints_bg d-flex justify-content-center'>View Complaints</p>
                            </div>
                            <div className='row  mb-5'>
                                {data && data.length ?(
                                    data.map((a)=>{
                                        return(
                                <div className='col-3 box ms-4 mt-2'>
                                    {/* <p className='Complaint_details_text mt-4'>User Complaints</p> */}
                                    <div className='row mt-4'>
                                        <div className='col-4'><p className='text_color'>User Name</p></div>
                                        <div className='col-1'><p className='text_color'>:</p></div>
                                        <div className='col-6' ><p className='text_color'>{a?.userId?.name||a?.rescueId?.name||a?.volunteerId?.name}</p></div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-5'><p className='text_color'>User Contact</p></div>
                                        <div className='col-1'><p className='text_color'>:</p></div>
                                        <div className='col-6'><p className='text_color'>{a?.userId?.phone||a?.rescueId?.phone||a?.volunteerId?.phone}</p></div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-4'><p className='text_color'>Complaint</p></div>
                                        <div className='col-1'><p className='text_color'>:</p></div>
                                        <div className='col-6'style={{textAlign:'justify'}}><p className='text_color'>{a?.complaintSubject}</p></div>
                                    </div>
                                    {/* <div className='continer mt-5 row'>
                                        <span className='Bottom_bg'><button className='Bottom_bg_btn Bottom_bg_btn_text ms-5 mt-2'>View More</button></span>
                                    </div> */}
                                </div>
                                )
                            })
                        ) :(
<div className="counsellornodatareq-lottie">
  <Lottie animationData={imglottiedata} />
</div>
                        )
                                }
                                

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div >
    )
}

export default AdminViewComplaints