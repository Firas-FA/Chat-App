import React from "react";

function Setting({icon,description,color}) {
  return (
    <>
      <div className="basics d-flex align-items-center justify-content-between  mb-2 ">
        <div className="d-flex align-items-center py-2">
          <img src={icon} className=" me-2" style={{ width: "21px" }} alt="" />
          <p className="my-auto" style={{color:color}}>{description}</p>
        </div>
        <div>
          {/* <img className="w-75" src={arrowIcon} alt="" /> */}
        </div>
      </div>
    </>
  );
}

export default Setting;
