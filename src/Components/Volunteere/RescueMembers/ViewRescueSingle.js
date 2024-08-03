import React , { useEffect, useState }from 'react'
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import axiosInstance from '../../Constants/Baseurl';


function ViewRescueSingle({rescueId,close}) {
    const [data, setData] = useState([]);
    console.log(rescueId,'new');
    

    const fetchEmployerRequests = () => {
        axiosInstance
          .post(`viewresquemembersbyid/${rescueId}`)
          .then((result) => {
            console.log(result);
            setData(result.data.data);
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
        <div className="">
      <div className="">
        <Container className="user-info-container">
          <div className=" ri-arrow-go-back-line" onClick={close} />
          <div className="user-profileviewimage">
            {/* <img src={`${url}/${data.custid?.image?.filename}`} width="100px" height="100px" alt="User" /> */}
          </div>
          <Form >
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              Full Name
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {data?.name}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              Age
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {data?.age}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              Gender
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {data?.gender}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              Email Id
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {data?.email}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              Contact
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {data?.phone}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              City
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {data?.city}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              State
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {data?.state}
              </Col>
            </Row>
            <Row className="user-info-row">
              <Col className="user-info-label" md={4}>
              Skills
              </Col>
              <Col className="user-info-coln" md={1}>
                :
              </Col>
              <Col className="user-info-value" md={7}>
                {data?.skills}
              </Col>
            </Row>

            
            

            
          </Form>
        </Container>
      </div>
    </div>
    </>
  )
}

export default ViewRescueSingle