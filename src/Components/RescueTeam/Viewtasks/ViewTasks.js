import React, { useEffect, useState } from "react";
import axiosInstance from "../../Constants/Baseurl";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ViewTasks() {
  const rescId = localStorage.getItem("rescueId");
  const [vol, setVol] = useState([]);

  const fetchPendingTasks = () => {
    axiosInstance
      .post(`viewpendingtasksforRescue/${rescId}`)
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

  const acceptfn = (id) => {
    axiosInstance
      .post(`rescueApprovetask/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          toast.success("Approved Successfully");
          fetchPendingTasks(); 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Reject Shops
  const deletefn = (id) => {
    axiosInstance
      .post(`rescuerejecttask/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          toast.success("Rejected Successfully");
          fetchPendingTasks(); 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
            <div className='container-reaemgalt'>              
   <Link to="/rescue-viewapprovedtasks">   <div className='adminmaindash-buttontop ri-eye-line'>View Approved Tasks</div></Link>  
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
                        className="approve-rescue"
                        onClick={() => acceptfn(alert._id)}
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        className="reject-rescue"
                        onClick={() => deletefn(alert._id)}
                      >
                        Reject
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
  );
}

export default ViewTasks;
