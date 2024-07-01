import React, { useEffect, useState } from "react";
import "./Volunteerreq.css";
import axiosInstance from "../../Constants/Baseurl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Volunteerreq() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance
      .post(`adminviewvolreq`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const acceptfn = (id) => {
    axiosInstance
      .post(`adminapprovevolunteer/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          toast.success("Approved Successfully");
          axiosInstance
            .post(`adminviewvolreq`)
            .then((res) => {
              console.log(res);
              setData(res.data.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Reject Shops
  const deletefn = (id) => {
    axiosInstance
      .post(`adminrejectvolunteer/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          toast.success("Rejected Successfully");
          axiosInstance
            .post(`adminviewvolreq`)
            .then((res) => {
              console.log(res);
              setData(res.data.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="adminmaindash-container">
      <div className="admindash-viewalert col-12" style={{ width: "1000px" }}>
        <div className="admindash-shrink">Volunteer Requests</div>
        <div className="row d-flex">
          {data && data.length ? (
            data.map((a, index) => {
              return (
                <div className="col-4">
                  <div className="admin-alert-boxinside">
                    <div className="admin-alert-content">
                      <p>Name : {a?.name}</p>
                      <p>Email : {a?.email}</p>
                      <p>Phone : {a?.phone}</p>
                      <p>Skills :{a?.skills}</p>
                    </div>
                    <div className="viewmore-dashbox">
                      <button
                        type="submit"
                        className="viewmore-dashboxacptbtn"
                        onClick={() => acceptfn(a._id)}
                      >
                        Accept
                      </button>
                      <button
                        type="submit"
                        className="viewmore-dashboxrjtbtn"
                        onClick={() => deletefn(a._id)}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ color: "red", fontSize: "20px" }}>
              No Requests Available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Volunteerreq;
