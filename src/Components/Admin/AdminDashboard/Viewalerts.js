import React, { useEffect, useState } from "react";
import "../AdminDashboard/Viewalerts.css";
import axiosInstance from "../../Constants/Baseurl";

function Viewalerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axiosInstance.post('/viewemergencyforadmin')
      .then(response => {
        if (response.data.status === 200) {
          setAlerts(response.data.data);
        } else {
          console.error('Failed to fetch data');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="adminmaindash-container">
      <div className="admindash-viewalert col-12">
        <div className="admindash-shrink">Emergency Alerts</div>
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
                  <p>Security Level : <span className={alert.securitylevel.toLowerCase() === 'critical' ? 'critical-admin-alert' : ''}>{alert.securitylevel}</span></p>
                </div>
                <div className="viewmore-dashbox"><p>View More</p></div>
              </div>
            </div>
);
})
) : (
<div style={{color:"red",fontSize:"20px"}}>No Requests Available</div>
)}
        </div>
      </div>
    </div>
  );
}

export default Viewalerts;
