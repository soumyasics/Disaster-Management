import React,{useState,useEffect} from 'react'
import { useParams, } from 'react-router-dom'
import axiosInstance from '../../Constants/Baseurl'

function ViewAlertStatus() {
    const {id}=useParams()
    console.log(id,'rescueid');
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
    <>
        <div className='vol-viewemrg-status-main'>
        <div className='vol-viewemrg-status-box'>
        <div className='row vol-viewemrg-status-head1'>
            <div className='col-2'>
                <h5>Updated On</h5>
            </div>
            <div className='col-2'>
                <h5>Updated By</h5>
            </div>
            <div className='col-2'>
                <h5>Description</h5>
            </div>
            <div className='col-2'>
                <h5>Location</h5>
            </div>
            <div className='col-4'>
                <h5>Status</h5>
            </div>
        </div>
        {data && data.length ? (
              data.map((alert, index) => (
        <div className='row vol-viewemrg-status-data mt-1'>
            <div className='col-2'>
                <p> {new Date(alert?.date).toLocaleDateString()}
                </p>
            </div>
            <div className='col-2'>
                {alert?.rescueId ? <p>{alert?.rescueId?.name}</p>
                : <p>{alert?.volunteerId?.name}</p>}
            </div>
            <div className='col-2'>
            <p>{alert?.alertId?.discription}</p>
            </div>
            <div className='col-2'>
            <p>{alert?.alertId?.location}</p>
            </div>
            <div className='col-4'>
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
    </>
  )
}

export default ViewAlertStatus