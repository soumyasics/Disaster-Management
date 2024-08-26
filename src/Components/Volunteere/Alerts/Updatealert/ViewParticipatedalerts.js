import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../../Constants/Baseurl";

function ViewParticipatedalerts() {
    const id = localStorage.getItem("volunteerId");
    // console.log(volid);
    const [vol, setVol] = useState([]);
  
    useEffect(() => {
      axiosInstance
        .post(`viewacceptedemrgforvol/${id}`)
        .then((res) => {
          console.log(res);
          setVol(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [id]);
  
  return (
    <div className="">
      <div className="adminmaindash-container">
        <div className="admindash-viewalert col-12">
          <div className="admindash-shrink">Emergencies </div>
          <div className="row d-flex">
            {vol && vol.length ? (
              vol.slice().reverse().map((alert, index) => (
                <div className="col-3" key={index}>
                  <div className="admin-alert-boxinside">
                    <div className="admin-alert-content">
                      <p> {alert?.alertId?.title}</p>
                      <p>{new Date(alert?.alertId?.date).toLocaleDateString()}</p>
                      <p>SecurityLevel: {alert?.alertId?.securitylevel}</p>
                      <p>Location: {alert?.alertId?.district}</p>
                    </div>
                    <Link
                    to={`/Volunteer-viewemrgalertstatus/${alert?.alertId?._id}`}
                      style={{ textDecoration: "none" }}
                    //   onClick={() => handleAddClick(alert?._id)}
                    >
                      <div className="viewmore-dashbox viewmore-btnbgrd">
                        <p>View Status</p>
                      </div>
                    </Link>
                    <Link
                    to={`/Volunteer-viewrescuemember/${alert?.alertId?._id}`}
                      style={{ textDecoration: "none" }}
                    //   onClick={() => handleAddClick(alert?._id)}
                    >
                      <div className="viewmore-dashbox viewmore-btnbgrd mt-1">
                        <p>View Rescue Members</p>
                      </div>
                    </Link>
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
    </div>
  )
}

export default ViewParticipatedalerts