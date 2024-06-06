import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import singInImage from "../../Assets/Images/singin-image.svg";
import phoneCall from "../../Assets/Images/phone-call.svg";
import SingInStar from "../../Assets/Images/SingInStar1.svg";
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import './SigninStyle.css'

function Signin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [displayAlert, setDisplayAlert] = useState("none")
  const navigate = useNavigate();
  const variant = 'danger';


  const handelSingIn = () => {
    if (phoneNumber === "") {
      setDisplayAlert("")
      setTimeout(() => setDisplayAlert("none"), 3000);
    }
    else {
      navigate(`/verification/${phoneNumber}`)
    }

  };
  return (
    <Row className="mx-0 vh-100">
      <Col md="6" className="lift-content">
        <Alert className="alertAnimate" style={{ position: "fixed", top: "10px", right: "10px", zIndex: "2", display: `${displayAlert}` }} key={variant} variant={variant}>
          Please enter your phone number to receive the OTP.
        </Alert>
        <img id="start1" src={SingInStar} alt="" />
        <img id="start2" src={SingInStar} alt="" />
        <img id="start3" src={SingInStar} alt="" />
        <img id="start4" src={SingInStar} alt="" />
        <h1 className="title">Hi, Welcome Back!</h1>
        <p className="sup-title">Hope you're doing fine.</p>
        <div className="group">
          <img className="icon" src={phoneCall} alt="" />
          <input
            value={phoneNumber}
            type="text"
            className="input"
            placeholder="Phone number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>
        <button onClick={handelSingIn} className="SingInBtn">
          {" "}
          Sign in
        </button>
      </Col>
      <Col md="6" className="right-content">
        <img id="imageSingin" src={singInImage} alt="" />
      </Col>
    </Row >
  );
}

export default Signin;
