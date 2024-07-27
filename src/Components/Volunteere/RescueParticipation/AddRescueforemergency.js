import React, { useEffect, useState } from "react";
import "./AddRescueforemergency.css";
import { useParams } from "react-router-dom";
import axiosInstance from "../../Constants/Baseurl";

function AddRescueforemergency() {
  const { id } = useParams();
  const url = axiosInstance.defaults.url;
  const [alert, setAlert] = useState({});
  const volid = localStorage.getItem("volunteerId");
  const [vol, setVol] = useState([]);
  const [rescue, setRescue] = useState({
    alertId: id,
    volunteerId: volid,
    rescuememberIds: []
  });

  useEffect(() => {
    axiosInstance
      .post(`viewemergencybyid/${id}`)
      .then((res) => {
        console.log(res);
        setAlert(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .post(`viewallresquemembersbyvolid/${volid}`)
      .then((res) => {
        console.log(res);
        setVol(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(rescue);

  const handleCheckboxChange = (event, memberId) => {
    setRescue((prevState) => {
      const { rescuememberIds } = prevState;
      if (event.target.checked) {
        return {
          ...prevState,
          rescuememberIds: [...rescuememberIds, memberId] // Add the member ID to the array
        };
      } else {
        return {
          ...prevState,
          rescuememberIds: rescuememberIds.filter(id => id !== memberId) // Remove the member ID from the array
        };
      }
    });
  };
  return (
    <div className="container">
      <div className="vol-addrescueemrgmain">
        <div className="vol-addrescueemrgbox">
          <div className="row vol-addrescueemrg-content">
            <span>Alert Details</span>
            <div>
              <img src={`${url}/${alert.image?.filename}`} />
            </div>
            <div className="col-4">
              <h5>Alert Title</h5>
            </div>
            <div className="col-8">
              <p>: {alert?.title}</p>
            </div>
            <div className="col-4">
              <h5>Security Level</h5>
            </div>
            <div className="col-8">
              <p> {alert?.securitylevel}</p>
            </div>
            <div className="col-4">
              <h5>User</h5>
            </div>
            <div className="col-8">
              <p> {alert?.userid?.name}</p>
            </div>
            <div className="col-4">
              <h5>Address</h5>
            </div>
            <div className="col-8">
              <p> {alert?.userid?.address}</p>
            </div>
            <div className="col-4">
              <h5>Contact</h5>
            </div>
            <div className="col-8">
              <p> {alert?.userid?.phone}</p>
            </div>
            <span>Available Rescue Members</span>
            {vol && vol.length ? (
              vol.map((member, index) => {
                return (
                  <>
                    <div className="col-4">Name : {member?.name}</div>
                    <div className="col-4">City : {member?.city}</div>
                    <div className="col-4">
                      <input
                        type="checkbox"
                        onChange={(e) => handleCheckboxChange(e, member._id)}
                      />{" "}
                    </div>
                  </>
                );
              })
            ) : (
              <div style={{ color: "red", fontSize: "20px" }}>
                No Members Available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRescueforemergency;
