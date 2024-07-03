import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Constants/Baseurl'

function Volviewemgalert() {
    const[alerts,setAlerts]=useState([])

    useEffect(()=>{
        axiosInstance.post(`viewemergencyforallusers`)
        .then((res)=>{
            console.log(res);
            setAlerts(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

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
                  <p>{alert?.title}</p>
                  <p>{new Date(alert.date).toLocaleDateString()}</p>
                  <p>{alert?.discription}</p>
                  <p>Security Level : <span >{alert?.securitylevel}</span></p>
                </div>
                <div className="viewmore-dashbox viewmore-btnbgrd"><p>View More</p></div>
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