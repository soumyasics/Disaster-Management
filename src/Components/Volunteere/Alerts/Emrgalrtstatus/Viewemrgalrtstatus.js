import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../../Constants/Baseurl'

function Viewemrgalrtstatus() {
    const {id}=useParams()
    const [data,setData]=useState([])

    useEffect(()=>{
        axiosInstance.post(`viewStatusByalertId/${id}`)
        .then((res)=>{
            console.log(res);
            setData(res.data.data)
        })
        .catch(((err)=>{
            console.log(err);
        }))
    },[])
  return (
    <div className='vol-viewemrg-status-main'>
        <div className='vol-viewemrg-status-box'>
        <div className='row vol-viewemrg-status-content'>
            <div className='col-2'>
                <h5>Date</h5>
            </div>
            <div className='col-2'>
                <h5>Rescue Name</h5>
            </div>
            <div className='col-2'>
                <h5>Contact</h5>
            </div>
            <div className='col-6'>
                <h5>Updation</h5>
            </div>
        </div>
        {data && data.length ? (
              data.map((alert, index) => (
        <div className='row vol-viewemrg-status-data'>
            <div className='col-2'>
                <p> {new Date(alert?.alertId?.date).toLocaleDateString()}
                </p>
            </div>
            <div className='col-2'>
                <p>{alert?.rescueId?.name}</p>
            </div>
            <div className='col-2'>
            <p>{alert?.rescueId?.phone}</p>
            </div>
            <div className='col-6'>
            <p>{alert?.status}</p>
            </div>
        </div>
              ))
            ) : (
              <div style={{ color: "red", fontSize: "20px" }}>
                No Requests Available
              </div>
            )}


        </div>
    </div>
  )
}

export default Viewemrgalrtstatus