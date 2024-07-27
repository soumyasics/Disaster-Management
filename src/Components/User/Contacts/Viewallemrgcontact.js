import React, { useEffect, useState } from "react";
import axiosInstance from "../../Constants/Baseurl";
import RescueNav from "../../RescueTeam/RescueNav";
import UserNavbar from "../Navbar/UserNavbar";

function Viewallemrgcontact() {
    const userid=localStorage.getItem("usersId")
    const rescueid=localStorage.getItem("rescueId")

  const [volunteers, setVolunteers] = useState([]);
  const [rescueMembers, setRescueMembers] = useState([]);

  useEffect(() => {
    // Fetch volunteers
    axiosInstance
      .post(`viewallvolunteers`)
      .then((res) => {
        console.log(res);
        setVolunteers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Fetch rescue members
    axiosInstance
      .post(`viewallresquemembers`)
      .then((res) => {
        console.log(res);
        setRescueMembers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
{
    rescueid?(
        <>
        <RescueNav/>
        </>
    ):(
        <>
        <UserNavbar/>
        </>
    )
}
      <div className="adminmaindash-container">
        <div className="admindash-viewalert col-12">
          <div className="admindash-shrink">Emergency Contacts</div>
          <div className="row d-flex">
            {/* <div className="col-12 "> */}
              {volunteers && volunteers.length ? (
                volunteers.map((a, index) => (
                  <div className="col-3" key={index}>
                    <div className="admin-alert-boxinside">
                      <div className="admin-alert-content">
                        <p>
                          <span style={{ justifyContent: "end" }}>
                            {a?.name}
                          </span>
                        </p>
                        <p>Department: Volunteer</p>
                        <p>Contact: {a?.phone}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ color: "red", fontSize: "20px" }}>
                  No Volunteers Available
                </div>
              )}
            {/* </div> */}

            {/* <div className="col-12 d-flex"> */}
              {rescueMembers && rescueMembers.length ? (
                rescueMembers.map((a, index) => (
                  <div className="col-3" key={index}>
                    <div className="admin-alert-boxinside">
                      <div className="admin-alert-content">
                        <p>
                          <span style={{ justifyContent: "end" }}>
                            {a?.name}
                          </span>
                        </p>
                        <p>Department: RescueMembers</p>
                        <p>Contact: {a?.phone}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ color: "red", fontSize: "20px" }}>
                  No Rescue Members Available
                </div>
              )}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewallemrgcontact;
