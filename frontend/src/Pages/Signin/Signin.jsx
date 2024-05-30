import React from "react";
import { Row, Col } from "react-bootstrap";
import singInImage from "../../Assets/Images/singin-image.svg";
import phoneCall from "../../Assets/Images/phone-call.svg";
import "./SigninStyle.css";

function Signin() {
  return (
    <Row className="mx-0 vh-100">
      <Col md="6" className="lift-content align-items-center">
        <h1 className="title">Hi, Welcome Back!</h1>
        <p className="sup-title">Hope you're doing fine.</p>
        <div className="group">
          <img className="icon" src={phoneCall} alt="" />
          <input class="input" placeholder="Phone number" />
        </div>
      </Col>
      <Col md="6" className="right-content">
        <img id="imageSingin" src={singInImage} alt="" />
      </Col>
    </Row>
  );
}

export default Signin;
