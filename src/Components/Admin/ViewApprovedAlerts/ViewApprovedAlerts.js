import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Lottie from "lottie-react";
import imglottiedata from "../../../Assets/nodatalottie.json";
import ViewSingleAlert from '../../RescueTeam/Alerts/ViewSingleAlert';
import axiosInstance from '../../Constants/Baseurl';

function ViewApprovedAlerts() {
    const [alerts, setAlerts] = useState([]);
    const [district, setDistrict] = useState("Thiruvananthapuram");

    const handleDistrictChange = (event) => {
        setDistrict(event.target.value);
    };

  useEffect(() => {
    axiosInstance.post(`/viewemergencyforallusers/${district}`)
      .then(response => {
        console.log(response);
        
        if (response.data.status === 200) {
          setAlerts(response.data.data.reverse());
        } else {
          console.error('Failed to fetch data');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [district]);

// const [show, setShow] = useState(false);
// const [openRequests, setOpenRequests] = useState(false);
// const [selectedAlertId, setSelectedAlertId] = useState(null);
// const navigate = useNavigate();

// const handleClose = () =>{
//   setShow(false);
// } 
// const handleShow = (alertId) =>{
//   setSelectedAlertId(alertId)
//   setShow(true);

// }
const  navigate=useNavigate();
const navigatetoviewstatus=(id)=>{
    navigate(`/admin-viewalertstatus/${id}`)
}
  return (
    <>
    <React.Fragment>
     {/* <Link to="/admin-dash" style={{textDecoration:"none"}}><span className="ri-arrow-left-line back-span"></span></Link>  */}
    <div className="adminmaindash-container">
      <div className="admindash-viewalert col-12">
        <div className="admindash-shrink">Emergency Alerts</div>
        <div style={{display:'flex',justifyContent:'end',marginTop:'-30px',marginRight:'30px'}}>
          <select 
          style={{background:'#EC574D',color:'#fff',outline:'none'}}
          onChange={handleDistrictChange} value={district}>
                            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                            <option value="Kollam">Kollam</option>
                            <option value="Pathanamthitta">Pathanamthitta</option>
                            <option value="Alappuzha">Alappuzha</option>
                            <option value="Kottayam">Kottayam</option>
                            <option value="Idukki">Idukki</option>
                            <option value="Ernakulam">Ernakulam</option>
                            <option value="Thrissur">Thrissur</option>
                            <option value="Palakkad">Palakkad</option>
                            <option value="Malappuram">Malappuram</option>
                            <option value="Kozhikode">Kozhikode</option>
                            <option value="Wayanad">Wayanad</option>
                            <option value="Kannur">Kannur</option>
                            <option value="Kasargod">Kasargod</option>
                        </select>
        </div>
        <div className="row d-flex">

        {alerts && alerts.length ? (
          alerts.map((alert,index) => {
            return (
            <div key={index} className="col-3">
              <div className="admin-alert-boxinside">
                <div className="admin-alert-content">
                  <p>{alert.title}</p>
                  <p>{new Date(alert.date).toLocaleDateString()}</p>
                  <p>{alert.discription}</p>
                  <p>Security Level : <span >{alert.securitylevel}</span></p>
                </div>
                <div className="viewmore-dashbox"onClick={() => navigatetoviewstatus(alert._id)} style={{cursor:'pointer'}}><p>View Status</p></div>
              </div>
            </div>
);
})
) : (
<div className="counsellornodatareq-lottie">
  <Lottie animationData={imglottiedata} />
</div>
)}
        </div>
      </div>
      {/* <Modal show={show} onHide={handleClose} centered>
                <div className='modal-use-postjob'>
                    <ViewSingleAlert close={handleClose}  alertId={selectedAlertId} />
                </div>
            </Modal> */}

    </div>
    </React.Fragment>
    </>
  )
}

export default ViewApprovedAlerts