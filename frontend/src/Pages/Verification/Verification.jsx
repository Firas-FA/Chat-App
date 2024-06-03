import React from 'react'
import { Row, Col } from "react-bootstrap";
import SingInStar from "../../Assets/Images/SingInStar1.svg";
import VerifcationImage from "../../Assets/Images/singin-image.svg";
import OtpForm from '../../Components/Auth Components/OtpForm';
import { useParams } from 'react-router-dom';

function Verification() {

  const { phoneNumber } = useParams();

  return (
    <Row className="mx-0 vh-100">
      <Col md="6" className="lift-content">
        <img id="start1" src={SingInStar} alt="" />
        <img id="start2" src={SingInStar} alt="" />
        <img id="start3" src={SingInStar} alt="" />
        <img id="start4" src={SingInStar} alt="" />
        <OtpForm />
      </Col>
      <Col md="6" className="right-content">
        <img id="imageSingin" src={VerifcationImage} alt="" />
      </Col>
    </Row>
  );
}

export default Verification