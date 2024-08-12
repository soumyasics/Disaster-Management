import React,{useState} from 'react'
import { toast } from 'react-toastify';
import axiosInstance from '../Constants/Baseurl';

function RescueAddComplaint({close}) {

    const userId=localStorage.getItem("rescueId")
    const [compalints, setComplaints] = useState({ 
        rescueId: userId,
        complaintSubject: ""
      });
    
      const changefn = (e) => {
        setComplaints({
          ...compalints,
          [e.target.name]: e.target.value
        });
      };
    
      const submitfn = async (e) => {
        e.preventDefault();
        try {
          const res = await axiosInstance.post(`addcomplaintbyRescue`, compalints);
          console.log(res);
          if (res.data.status === 200) {
            toast.success(res.data.msg);
            close()
          } else {
            toast.error(res.data.msg);
            close()
        }
        } catch (err) {
          console.log(err);
          toast.error("An error occurred while Register Complaints");
        }
      };

  return (
    <div>
      <>
         <div className="container add-status-main">
      <div className="add-status-box">
        <span className="ri-arrow-left-line" onClick={close} />
        <form onSubmit={submitfn}>
          <div className="add-status-head">
            <h5>Register Complaints</h5>
          </div>
          <div className="add-status-textarea">
            <textarea
              required
              name="complaintSubject"
              value={compalints.complaintSubject}
              onChange={changefn}
            />
          </div>
          <div className="add-status-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
    </div>
  )
}

export default RescueAddComplaint
