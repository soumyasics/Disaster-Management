import React, { useEffect, useState } from "react";
import axiosInstance from "../../Constants/Baseurl";
import { toast } from "react-toastify";
import { Link,useNavigate } from "react-router-dom";
import { Modal, Button, Dropdown } from 'react-bootstrap';
import Addrescuestatus from "../Statusupdate/Addrescuestatus";

function ViewapprovedTasks() {
  const rescId = localStorage.getItem("rescueId");
  const [vol, setVol] = useState([]);

  const fetchPendingTasks = () => {
    axiosInstance
      .post(`viewApprovedtasksforRescue/${rescId}`)
      .then((res) => {
        console.log(res);
        setVol(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPendingTasks();
  }, [rescId]);

  // Modal functionality
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ alertId: null, volunteerId: null });
  const handleClose = () => setShow(false);
  const handleShow = (alertId, volunteerId) => {
    setModalContent({ alertId, volunteerId });
    setShow(true);
  };

  const navigate =useNavigate();

  const navigateToViewAlertStatus=(id)=>{
    navigate(`/rescue-viewalertstatus/${id}`)
  }

  return (
    <div className="">
      <div className='container-reaemgalt'>              
        <Link to="/rescue-viewpendingtasks">
          <div className='adminmaindash-buttontop ri-eye-line'>View Pending Tasks</div>
        </Link>
      </div> 

      <div className="adminmaindash-container">
        <div className="admindash-viewalert col-12">
          <div className="admindash-shrink">View Tasks</div>
          <div className="row d-flex">
            {vol && vol.length ? (
              vol.map((alert, index) => (
                <div className="col-3" key={index}>
                  <div className="admin-alert-boxinside">
                    <div className="admin-alert-content">
                    <p>{alert?.alertId?.title}</p>
                      <p>{alert?.alertId?.caterory}</p>
                      <p>
                        {new Date(alert?.alertId?.date).toLocaleDateString()}
                      </p>
                      <p>Location: {alert?.alertId?.location}</p>
                      <p>Needs: {alert?.alertId?.needs}</p>
                    </div>
                    <div className="d-flex viewmore-dashbox">
                      <button
                        type="button"
                        className="reject-rescue"
                        onClick={() => handleShow(alert.alertId._id, alert.volunteerId._id)}
                      >
                        Add Update 
                      </button>
                      <button
                        type="button"
                        className="reject-rescue mx-2"
                        style={{background:'green'}}
                        onClick={() => navigateToViewAlertStatus(alert.alertId._id)}
                      >
                        View  
                      </button>
                    </div>
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
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <div className=''>
          <Addrescuestatus 
            alertId={modalContent.alertId} 
            volunteerId={modalContent.volunteerId} 
            close={handleClose} 
          />
        </div>
      </Modal>
    </div>
  );
}

export default ViewapprovedTasks;
