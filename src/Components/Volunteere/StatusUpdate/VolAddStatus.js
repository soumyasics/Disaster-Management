import React,{useState} from 'react'
import axiosInstance from '../../Constants/Baseurl';
import { toast } from 'react-toastify';

function VolAddStatus({ close, alertId }) {
  const volunteerId = localStorage.getItem("volunteerId");

    const [status, setStatus] = useState({
        volunteerid: volunteerId,
        alertid: alertId,
        status: ""
      });
    
      const changefn = (e) => {
        setStatus({
          ...status,
          [e.target.name]: e.target.value
        });
      };
    
      const submitfn = async (e) => {
        e.preventDefault();
        try {
          const res = await axiosInstance.post(`addRescuestatus`, status);
          console.log(res);
          if (res.data.status === 200) {
            toast.success("Updated Successfully");
            close()
          } else {
            toast.error(res.data.msg);
            close()
    
          }
        } catch (err) {
          console.log(err);
          toast.error("An error occurred while updating the status");
        }
      };
    
  return (
    <>
        <div className="container add-status-main">
      <div className="add-status-box">
        <span className="ri-arrow-left-line" onClick={close} />
        <form onSubmit={submitfn}>
          <div className="add-status-head">
            <h5>Add Status</h5>
          </div>
          <div className="add-status-textarea">
            <textarea
              required
              name="status"
              value={status.status}
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
  )
}

export default VolAddStatus