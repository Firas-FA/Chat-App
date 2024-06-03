import React from 'react';
import './OtpForm.css';

const OtpForm = ({ userPhoneNumber }) => {
  return (
    <form className="otp-Form">
      <span className="mainHeading">Verify Code</span>
      <p className="otpSubheading">
        Enter the the code we just sent
        you on your registered
        <span className="userNumber">
          {"userPhoneNumber"}
        </span>
      </p>
      <div className="inputContainer">
        <input required="required" maxLength="1" type="text" className="otp-input" id="otp-input1" />
        <input required="required" maxLength="1" type="text" className="otp-input" id="otp-input2" />
        <input required="required" maxLength="1" type="text" className="otp-input" id="otp-input3" />
        <input required="required" maxLength="1" type="text" className="otp-input" id="otp-input4" />
      </div>
      <button className="verifyButton" type="submit">Verify</button>
      <p className="resendNote">
        Didn’t get the Code?<label className="resendBtn" >Resend</label>
      </p>
    </form >
  );
};

export default OtpForm;
