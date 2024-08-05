import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../Constants/Baseurl";
import { Modal } from "react-bootstrap";
import VolAddStatus from "../../StatusUpdate/VolAddStatus";

function Viewemrgalrtstatus() {
  const volunteerId = localStorage.getItem("volunteerId");

  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`viewStatusByalertId/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({
    alertId: null,
    volunteerId: null,
  });
  const handleClose = () => setShow(false);
  const handleShow = (alertId, volunteerId) => {
    setModalContent({ alertId, volunteerId });
    setShow(true);
  };

  return (
    <>
      <div
        className="mt-3 mb-4"
        style={{ display: "flex", justifyContent: "end", marginRight: "150px" }}
      >
        <button
          style={{
            border: "none",
            background: "#016E75",
            color: "#fff",
            borderRadius: "5px",
          }}
          onClick={() => handleShow(id, volunteerId)}
        >
          UPDATE STATUS
        </button>
      </div>
      <div className="vol-viewemrg-status-main">
        <div className="vol-viewemrg-status-box">
          <div className="row vol-viewemrg-status-content mb-1">
            <div className="col-2">
              <h5>Date</h5>
            </div>
            <div className="col-2">
              <h5>Rescue Name</h5>
            </div>
            <div className="col-2">
              <h5>Contact</h5>
            </div>
            <div className="col-6">
              <h5>Updation</h5>
            </div>
          </div>
          {data && data.length ? (
            data.map((alert, index) => (
              <div className="row vol-viewemrg-status-data mb-1">
                <div className="col-2">
                  <p> {new Date(alert?.alertId?.date).toLocaleDateString()}</p>
                </div>
                <div className="col-2">
                  {/* <p>{alert?.rescueId?.name}</p> */}
                  {alert?.rescueId ? <p>{alert?.rescueId?.name}</p>
                : <p>{alert?.volunteerId?.name}</p>}
                </div>
                <div className="col-2">
                {alert?.rescueId ? <p>{alert?.rescueId?.phone}</p>
                : <p>{alert?.volunteerId?.phone}</p>}
                </div>
                <div className="col-6">
                  <p>{alert?.status}</p>
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
      <Modal show={show} onHide={handleClose} centered>
        <div className="">
          <VolAddStatus
            alertId={modalContent.alertId}
            volunteerId={modalContent.volunteerId}
            close={handleClose}
          />
        </div>
      </Modal>
    </>
  );
}

export default Viewemrgalrtstatus;
