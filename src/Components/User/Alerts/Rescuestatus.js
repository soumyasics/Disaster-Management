import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Constants/Baseurl'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import UserAddComplaints from '../Rescuestatus/AddComplaints/UserAddComplaints'


function Rescuestatus() {
    const userid=localStorage.getItem("usersId")
    const[alerts,setAlerts]=useState([''])

    useEffect(()=>{
        axiosInstance.post(`viewemergencybyuserid/${userid}`)
        .then((res)=>{
            console.log(res);
            setAlerts(res.data.data) 
        })
        .catch((err)=>{
            console.log(err);
        })
    },[userid])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
    setShow(true);
    };

  return (
    <div className=''> 
    {/* <div className='container-reaemgalt'>              
        <div className='adminmaindash-buttontop ri-add-circle-line'>Add Emergency Alerts</div>
        </div>  */}
            <div style={{display:'flex',justifyContent:'end',marginRight:'120px',marginTop:'20px'}}>
              <button
                style={{border:'none',borderRadius:'5px',width:'190px',color:'#fff',background:'red'}}
                onClick={handleShow}
                >Register Complaints
              </button>
            </div>
            <div className="adminmaindash-container">
              
      <div className="admindash-viewalert col-12">
        
        <div className="admindash-shrink">Emergency Alerts</div>
            
        <div className="row d-flex">

        {alerts && alerts.length ? (
          alerts.slice().reverse().map((alert,index) => {
            return (
            <div  className="col-3">
              <div className="admin-alert-boxinside">
                <div className="admin-alert-content">
                  <p>{alert?.title}</p>
                  <p>{new Date(alert.date).toLocaleDateString()}</p>
                  <p>{alert?.discription}</p>
                  <p>Security Level : <span >{alert?.securitylevel}</span></p>
                </div>
               <Link to={`/user-viewrescuemembers/${alert?._id}`}><div className="viewmore-dashbox viewmore-btnbgrd"><p>View More</p></div></Link> 
              </div>
            </div>
 );
})
 ) : (
 <div style={{color:"red",fontSize:"20px"}}>No Requests Available</div>
 )} 
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <div className=''>
          <UserAddComplaints 
            close={handleClose} 
          />
        </div>
      </Modal>

    </div>

    </div>

  )
}

export default Rescuestatus