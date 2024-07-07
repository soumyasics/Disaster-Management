import React, { useEffect, useState } from 'react'
import axiosInstance from "../../Constants/Baseurl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import imglottiedata from "../../../Assets/nodatalottie.json";


function Rescuereq() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      axiosInstance
        .post(`viewallrescuereq`)
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
        .post(`adminapproveresque/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            toast.success("Approved Successfully");
            axiosInstance
              .post(`viewallrescuereq`)
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
        .post(`adminrejectresque/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            toast.success("Rejected Successfully");
            axiosInstance
              .post(`viewallrescuereq`)
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
      <div className="admindash-shrink">Rescue Team Requests</div>
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
<div className="counsellornodatareq-lottie">
  <Lottie animationData={imglottiedata} />
</div>
        )}
      </div>
    </div>
  </div>

  )
}

export default Rescuereq