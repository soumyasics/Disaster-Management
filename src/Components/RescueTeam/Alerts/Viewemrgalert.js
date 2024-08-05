import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Constants/Baseurl'
import "./Viewemrgalert.css"
import ViewSingleAlert from './ViewSingleAlert';
import { Modal } from 'react-bootstrap';

function Viewemrgalert() {
    const[alerts,setAlerts]=useState([])
    const [district, setDistrict] = useState("Thiruvananthapuram");


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

    const handleDistrictChange = (event) => {
        setDistrict(event.target.value);
    };
    const [show, setShow] = useState(false);
    const [openRequests, setOpenRequests] = useState(false);
    const [selectedId, setSelectedId] = useState({ rescueId: null}); // State for storing selected job and customer IDs
    const handleClose = () => setShow(false);
    const handleShow = (rescueId) => {
    setSelectedId(rescueId);
    setShow(true);
    };
  return (
    <div className=''> 
    {/* <div className='container-reaemgalt'>              
        <div className='adminmaindash-buttontop ri-add-circle-line'>Add Emergency Alerts</div>
        </div>  */}
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
                <button onClick={()=>handleShow(alert?._id)} style={{border:'none'}}>
                <div className="viewmore-dashbox viewmore-btnbgrd"><p>View More</p></div>
                </button>
              </div>
            </div>
 );
})
 ) : (
 <div style={{color:"red",fontSize:"20px"}}>No Alerts Available</div>
 )} 
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
                <div className='modal-use-postjob'>
                    <ViewSingleAlert close={handleClose}  alertId={selectedId} />
                </div>
            </Modal>

    </div>

    </div>
  )
}

export default Viewemrgalert