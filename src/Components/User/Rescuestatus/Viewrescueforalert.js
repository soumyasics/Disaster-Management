import React, { useEffect, useState } from "react";
import axiosInstance from "../../Constants/Baseurl";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
function Viewrescueforalert() {
    const {id}=useParams()
    const [vol, setVol] = useState([]);
  
    const fetchPendingTasks = () => {
      axiosInstance
        .post(`userviewrescueteams/${id}`)
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
    }, [id]);
  
  return (
    <div className="">

      <div className="adminmaindash-container">
        <div className="admindash-viewalert col-12">
          <div className="admindash-shrink">View Tasks</div>
          <div className="row d-flex">
            {vol && vol.length ? (
              vol.map((alert, index) => (
                <div className="col-3" key={index}>
                  <div className="admin-alert-boxinside">
                    <div className="admin-alert-content">
                      <p>Volunteer : {alert?.volunteerId?.name}</p>
                      <p>Contact : {alert?.volunteerId?.phone}</p>
                      {/* <p>
                        {new Date(alert?.alertId?.date).toLocaleDateString()}
                      </p> */}
                      <p>Rescue Member: {alert?.rescueId?.name}</p>
                      <p>Contact: {alert?.rescueId?.phone}</p>
                      <p>Skills: {alert?.rescueId?.skills}</p>

                    </div>
                    <div className="d-flex viewmore-dashbox">
                      {/* <button
                        type="button"
                        className="approve-rescue"
                        onClick={() => acceptfn(alert._id)}
                      > */}
                        {/* Approve
                      </button> */}
                      <button
                        type="button"
                        className="reject-rescue"
                        // onClick={() => deletefn(alert._id)}
                      >
                        View Status
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
    </div>
  )
}

export default Viewrescueforalert