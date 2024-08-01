import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Constants/Baseurl'
import { Link } from 'react-router-dom'



function Volviewemgalert() {
  const volid=localStorage.getItem("volunteerId")
    const[alerts,setAlerts]=useState('')
    const[voldistrict,setVolDistrict]=useState('')

    useEffect(()=>{
      axiosInstance.post(`viewvolenteerById/${volid}`)
      .then((data)=>{
        console.log(data);
        if(data.status===200){
          setVolDistrict(data?.data?.data)
        }
      })
    },[volid])
    console.log(voldistrict,'vol data');

    

const district=voldistrict?.district
console.log(district);
    useEffect(()=>{
        axiosInstance.post(`viewemergencyforallusers/${district}`)
        .then((res)=>{
            console.log(res);
            setAlerts(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[district])

  return (
    <div className=''> 
    {/* <div className='container-reaemgalt'>              
        <div className='adminmaindash-buttontop ri-add-circle-line'>Add Emergency Alerts</div>
        </div>  */}
            <div className="adminmaindash-container">
      <div className="admindash-viewalert col-12">
        <div className="admindash-shrink">Emergency Alerts</div>
        <div className="row d-flex">

        {alerts && alerts.length ? (
          alerts.map((alert,index) => {
            return (
            <div  className="col-3">
              <div className="admin-alert-boxinside">
                <div className="admin-alert-content">
                { alert?.userid  && <p>{alert?.userid?.name} {alert?.userid?.phone}</p>}
                { alert?.volid  && <p>{alert?.volid?.name} {alert?.volid?.phone}</p>}
                { alert?.rescueid  && <p>{alert?.rescueid?.name} {alert?.rescueid?.phone}</p>}
                <p>{new Date(alert.date).toLocaleDateString()}</p>
                  <p>{alert?.discription}</p>
                  <p>Security Level : <span >{alert?.securitylevel}</span></p>
                </div>
          <Link to={`/Volunteer-addrescueforemrg/${alert?._id}`} style={{textDecoration:"none"}}>     <div className="viewmore-dashbox viewmore-btnbgrd"><p>Participate</p></div></Link> 
              </div>
            </div>
 );
})
 ) : (
 <div style={{color:"red",fontSize:"20px"}}>No Requests Available</div>
 )} 
        </div>
      </div>
      {/* <Modal show={show} onHide={handleClose} centered>
                <div className='modal-use-postjob'>
                    <Acptrjtreq close={handleClose}  alertId={selectedAlertId} />
                </div>
            </Modal> */}

    </div>

    </div>

  )
}

export default Volviewemgalert