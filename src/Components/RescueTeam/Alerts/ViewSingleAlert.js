import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axiosInstance from '../../Constants/Baseurl';
import { toast } from 'react-toastify';
import './ViewSingleAlert.css'


function ViewSingleAlert({close,alertId}) {
    console.log(alertId);
    const[alert,setAlert]=useState({})
    const url = axiosInstance.defaults.url;

    useEffect(()=>{
   
    axiosInstance.post(`viewemergencybyid/${alertId}`)
    .then((result)=>{
        console.log(result);
        setAlert(result.data.data)
    })
    .catch((err)=>{
        console.log(err);
    })   
},[])
  return (
    <>
        <div className='container acptrjtreq-mainboxcontainer'>
       <div className='acptrjtreq-mainbox '>
       <Link onClick={close} style={{textDecoration:"none",color:"#016E75"}}> <span className='ri-arrow-go-back-line'></span></Link>
        <Container className="user-info-container">
      <Row className="user-info-row">
        <Col className="user-info-label">Alert Title</Col>
        <Col className="user-info-value">: {alert?.title}</Col>
      </Row>
      <Row className="user-info-row">
        <Col className="user-info-label">Date & Time</Col>
        <Col className="user-info-value">:{new Date(alert.date).toLocaleDateString()} & {new Date(alert.date).toLocaleTimeString()}</Col>
      </Row>
      <Row className="user-info-row">
        <Col className="user-info-label">Category</Col>
        <Col className="user-info-value">: {alert?.caterory}</Col>
      </Row>
      <Row className="user-info-row">
        <Col className="user-info-label">Location</Col>
        <Col className="user-info-value">: {alert?.district}</Col>
      </Row>
      <Row className="user-info-row">
        <Col className="user-info-label">Immediate Needs</Col>
        <Col className="user-info-value">: {alert?.needs}</Col>
      </Row>
      <Row className="user-info-row">
        <Col className="user-info-label">Security Level</Col>
        <Col className="user-info-value">: {alert?.securitylevel}</Col>
      </Row>
      <Row className="user-info-row">
        <Col className="user-info-label">Alert Description</Col>
        <Col className="user-info-value moredata-value">: {alert?.discription}</Col>
      </Row>
      <Row className="user-info-row">
        <Col className="user-info-label">Photos</Col>
        <Col className="user-info-value"> <img src={`${url}/${alert.image?.filename}`} width="400px" height="150px"/></Col>
      </Row>
      {/* <Row className="button-group">
        <Col>
          <Button variant="success" className="w-100" onClick={acceptfn}>Approve</Button>
        </Col>
        <Col>
          <Button variant="danger" className="w-100 ml-2" onClick={rejectfn}>Reject</Button>
        </Col>
      </Row> */}
    </Container>
        </div>
    </div>
    </>
  )
}

export default ViewSingleAlert