import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Constants/Baseurl'
import { Modal } from 'react-bootstrap'
import ViewRescueSingle from './ViewRescueSingle'
import { toast } from 'react-toastify'

function ViewRescueMembers() {
    const volid=localStorage.getItem("volunteerId")
    const[data,setData]=useState('')
    const[voldistrict,setVolDistrict]=useState('')

    useEffect(()=>{
      axiosInstance.post(`viewallresquemembersbyvolid/${volid}`)
      .then((data)=>{
        console.log(data);
        if(data.status===200){
          setData(data?.data?.data)
        }
      })
    },[volid])
    console.log(data,'vol data');

const [show, setShow] = useState(false);
const [openRequests, setOpenRequests] = useState(false);
const [selectedId, setSelectedId] = useState({ rescueId: null}); // State for storing selected job and customer IDs
const handleClose = () => setShow(false);
const handleShow = (rescueId) => {
    setSelectedId(rescueId);
    setShow(true);
  };

  const removeRescuemember=(id)=>{
    axiosInstance.post(`deactivaterescuemember/${id}`)
    .then((data)=>{
        if(data.status===200){
            console.log(data,'data');
            setTimeout(() => {
                window.location.reload(false)
            }, 1000);
        }
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  return (
    <>
        <div className="adminmaindash-container">
              
              <div className="admindash-viewalert col-12">
                
                <div className="admindash-shrink">Emergency Alerts</div>
                <div className="row d-flex">
        
                {data && data.length ? (
                  data.map((a,index) => {
                    return (
                    <div  className="col-3">
                      <div className="admin-alert-boxinside" style={{maxHeight:'fit-content'}}>
                        <div className="admin-alert-content">
                        <p>Name : <span >{a?.name}</span></p>
                        <p>Age : <span >{a?.age}</span></p>
                        <p>Email Id : <span >{a?.email}</span></p>
                        <p>Phone : <span >{a?.phone}</span></p>
                        <p>City : <span >{a?.city}</span></p>

                        </div>
                        <div style={{display:'flex',gap:'40px',marginLeft:'30px',marginBottom:'20px'}}>
                  <button onClick={()=>handleShow(a?._id)} style={{border:"none",background:'#342',color:'#fff'}}>     
                  View More</button> 
                  <button onClick={()=>removeRescuemember(a?._id)} style={{border:"none",background:'red',color:'#fff'}}>     
                  Remove</button> 
                  </div>
                      </div>
                    </div>
         );
        })
         ) : (
         <div style={{color:"red",fontSize:"20px"}}>No Requests Available</div>
         )} 
                </div>
              </div>
              <Modal show={show} onHide={handleClose} centered>
                        <div className='modal-use-postjob'>
                            <ViewRescueSingle close={handleClose}  rescueId={selectedId} />
                        </div>
                    </Modal>
        
            </div>
    </>
  )
}

export default ViewRescueMembers