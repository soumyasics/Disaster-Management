import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axiosInstance from '../../Constants/Baseurl';

function ViewRescumembers() {

    const {id} =useParams() 
    console.log(id,'alertId');

    const [data,setData]=useState('');

    useEffect(() => {
        axiosInstance
          .post(`volviewrescumembers/${id}`)
          .then((res) => {
            console.log(res);
            setData(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [id]);

      const removerescuemember=(id)=>{
        axiosInstance.post(`volremoveresucemember/${id}`)
        .then((data)=>{
            if(data.status===200){
                console.log(data);
                toast.info(data.data.msg)
                setTimeout(() => {
                    window.location.reload(false)
                }, 3000);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
      }
    
  return (
    <>
        <div className="">
      <div className="adminmaindash-container">
        <div className="admindash-viewalert col-12">
          <div className="admindash-shrink">Rescue Members</div>
          <div className="row d-flex">
            {data && data.length ? (
              data.map((alert, index) => (
                <div className="col-3" key={index}>
                  <div className="admin-alert-boxinside">
                    <div className="admin-alert-content">
                      <p>Name: {alert?.rescueId?.name}</p>
                      <p>Age: {alert?.rescueId?.age}</p>
                      <p>Email: {alert?.rescueId?.email}</p>
                      <p>Phone: {alert?.rescueId?.phone}</p>
                    </div>
                    <button
                    
                      style={{ textDecoration: "none" ,border:'none' }}
                      onClick={() =>removerescuemember(alert?.rescueId?._id)}
                    >
                      <div className="viewmore-dashbox viewmore-btnbgrd">
                        <p>Remove</p>
                      </div>
                    </button>
                    
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
    </>
  )
}

export default ViewRescumembers