import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Lottie from "lottie-react";
import imglottiedata from "../../Assets/nodatalottie.json";
import axiosInstance from "../Constants/Baseurl";
import Acptrjtreq from "./Requests/Acptrjtreq";
function AdminViewCompletedAlerts() {

    const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axiosInstance
      .post("/viewcompletedemergencies")
      .then((response) => {
        if (response.data.status === 200) {
          setAlerts(response.data.data.reverse());
        } else {
          console.error("Failed to fetch data");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  //modal open functionality
  const [show, setShow] = useState(false);
  const [openRequests, setOpenRequests] = useState(false);
  const [selectedAlertId, setSelectedAlertId] = useState(null);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = (alertId) => {
    setSelectedAlertId(alertId);
    setShow(true);
  };

  return (
    <React.Fragment>
      {/* <Link to="/admin-dash" style={{ textDecoration: "none" }}>
        <span className="ri-arrow-left-line back-span"></span>
      </Link> */}
      <div className="adminmaindash-container">
        <div className="admindash-viewalert col-12">
          <div className="admindash-shrink">Emergency Alerts</div>
          <div className="row d-flex">
            {alerts && alerts.length ? (
              alerts.map((alert, index) => {
                return (
                  <div key={index} className="col-3">
                    <div className="admin-alert-boxinside">
                      <div className="admin-alert-content">
                        <p>{alert.title}</p>
                        <p>{new Date(alert.date).toLocaleDateString()}</p>
                        <p>{alert.discription}</p>
                        <p>
                          Security Level : <span>{alert.securitylevel}</span>
                        </p>
                      </div>
                      <div
                        className="viewmore-dashbox"
                        onClick={() => handleShow(alert._id)}
                      >
                        <p>View More</p>
                      </div>
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
        <Modal show={show} onHide={handleClose} centered>
          <div className="modal-use-postjob">
            <Acptrjtreq close={handleClose} alertId={selectedAlertId} />
          </div>
        </Modal>
      </div>
    </React.Fragment>
  )
}

export default AdminViewCompletedAlerts
