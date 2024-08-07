import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../Constants/Baseurl'
import { Modal } from 'react-bootstrap'
import { toast } from 'react-toastify'

function ViewAlertStatusAdmin() {
    const {id}=useParams()
    const [data,setData]=useState([])
    const navigate=useNavigate()

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

    const deletefn=(()=>{
        axiosInstance.post(`deactivateAlertbyadmin/${id}`)
        .then((res)=>{
            console.log(res);
           if(res.data.status==200){
            toast.success("Removed Successfully")
            navigate("/admin-viewapprovedalerts")
           }
        })
        .catch(((err)=>{
            console.log(err);
        }))

    })
  return (
    <>
            <div className='viewalertstatus-adminbtn'>
            <button type='button' onClick={deletefn}>Delete Alert</button>
        </div>

        <div className='vol-viewemrg-status-main mt-3'>
        <div className='vol-viewemrg-status-box'>
        <div className='row vol-viewemrg-status-content mb-1'>
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
        <div className='row vol-viewemrg-status-data mb-1'>
            <div className='col-2'>
                <p> {new Date(alert?.alertId?.date).toLocaleDateString()}
                </p>
            </div>
            <div className='col-2'>
            {alert?.rescueId ? <p>{alert?.rescueId?.name}</p>
                : <p>{alert?.volunteerId?.name}</p>}

            </div>
            <div className='col-2'>
            {/* <p>{alert?.rescueId?.phone}</p> */}
            {alert?.rescueId ? <p>{alert?.rescueId?.phone}</p>
                : <p>{alert?.volunteerId?.phone}</p>}
            </div>
            <div className='col-6'>
            <p>{alert?.status}</p>
            </div>
        </div>
              ))
            ) : (
              <div style={{ color: "red", fontSize: "20px" }}>
                No Status Available
              </div>
            )}


        </div>
    </div>
    </>
  )
}

export default ViewAlertStatusAdmin