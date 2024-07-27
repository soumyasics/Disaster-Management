import React, { useEffect, useState } from "react";
import axiosInstance from "../../Constants/Baseurl";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Addrescueforemrg() {
  const { id } = useParams();
  const volid = localStorage.getItem("volunteerId");
  const [vol, setVol] = useState([]);
  const [rescue, setRescue] = useState({
    alertId: id,
    volunteerId: volid,
    rescueId: ""
  });

  useEffect(() => {
    axiosInstance
      .post(`viewallresquemembersbyvolid/${volid}`)
      .then((res) => {
        console.log(res);
        setVol(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [volid]);

  useEffect(() => {
    if (rescue.rescueId) {
      submitfn();
    }
  }, [rescue]);

  const handleAddClick = (alertId) => {
    setRescue({
      ...rescue,
      rescueId: alertId
    });
  };

  const submitfn = () => {
    console.log("Submitting data: ", rescue);
    axiosInstance.post(`addrescue`, rescue)
      .then((res) => {
        console.log(res);
        if(res.data.status==200){
            toast.success("Added Successfully");
            // alert("added")
        }
        else{
            toast.error(res.data.msg)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <div className="adminmaindash-container">
        <div className="admindash-viewalert col-12">
          <div className="admindash-shrink">Available Members</div>
          <div className="row d-flex">
            {vol && vol.length ? (
              vol.map((alert, index) => (
                <div className="col-3" key={index}>
                  <div className="admin-alert-boxinside">
                    <div className="admin-alert-content">
                      <p>Name: {alert?.name}</p>
                      <p>Contact: {alert?.phone}</p>
                      <p>City: {alert?.city}</p>
                      <p>Skills: {alert?.skills}</p>
                    </div>
                    <Link
                      style={{ textDecoration: "none" }}
                      onClick={() => handleAddClick(alert?._id)}
                    >
                      <div className="viewmore-dashbox viewmore-btnbgrd">
                        <p>Add</p>
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
  );
}

export default Addrescueforemrg;
