import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../Constants/Baseurl'

function ViewPP() {
    const [data,setData]=useState()

    useEffect(()=>{
        axiosInstance.post('viewprivacypolicy')
        .then((data)=>{
            if(data.status===200){
                console.log(data,'data');
                setData(data.data.data)
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    console.log('final',data);
  return (
    <>
        <div className='container'>
            <div style={{display:'flex',marginTop:'50px',gap:'900px'}}>
                <div className='pp-head'>
                    <h5>Privacy Policy</h5>
                </div>
                <div >
                    {/* <button className='pp-update-btn' onClick={()=>navigateToEdit(data?._id)}>
                            Update
                    </button> */}
                </div>
            </div>
            
            
            <div className='pp-body'>
                <h4 style={{color:'#017178'}}>
                    Privacy policy :- 
                </h4>
                <p 
                style={{textAlign:'justify',lineHeight:'2.6'}}
                >{data?.privacypolicy}</p>
                
            </div>
            
            
        </div>
    </>
  )
}

export default ViewPP