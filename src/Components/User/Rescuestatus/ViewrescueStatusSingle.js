import React,{useState,useEffect} from 'react'
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import axiosInstance from '../../Constants/Baseurl';
import './Viewrescue.css'

function ViewrescueStatusSingle({rescueId,close}) {
    const [rescuestatus, setRescueStatus] = useState([]);
    console.log(rescueId,'new');
    

    const fetchEmployerRequests = () => {
        axiosInstance
          .post(`viewStatusByrescueId/${rescueId}`)
          .then((result) => {
            console.log(result);
            setRescueStatus(result.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      useEffect(() => {
        fetchEmployerRequests();
      }, []);

  return (
    <>
        <div className="empview-postjob-singlemain">
      <div className="empview-postjob-singlebox">
        <Container className="user-info-container">
          <div className=" ri-arrow-go-back-line" onClick={close} />
          <div className="user-profileviewimage">
            {/* <img src={`${url}/${data.custid?.image?.filename}`} width="100px" height="100px" alt="User" /> */}
          </div>
          <Form >
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              Rescue Member Name
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {rescuestatus?.jobName}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              Alert Status 
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {rescuestatus?.jobType}
              </Col>
            </Row>
            

            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
                Posted Date
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
              {new Date(rescuestatus?.date).toLocaleDateString()}
              </Col>
            </Row>
            

            
          </Form>
        </Container>
      </div>
    </div>
    </>
  )
}

export default ViewrescueStatusSingle