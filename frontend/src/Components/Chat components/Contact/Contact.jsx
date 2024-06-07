import React from "react";
import { Col, Row } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { RiSearch2Line } from "react-icons/ri";
import "./ContactStyle.css";
import Person from "../Person/Person";
// import { FaRegEdit } from "react-icons/fa";
import userImg from '../../../Assets/Images/Ellipse 5.png'
import Basics from "../PersonInfoComponents/Basics/Basics";
import editIcon from '../../../Assets/Images/edit.png'
import savedIcon from '../../../Assets/Images/save-2.png'
import pinnedIcon from '../../../Assets/Images/star.png'
import langIcon from '../../../Assets/Images/translate.png'
import noteIcon from '../../../Assets/Images/note.png'
import phoneIcon from '../../../Assets/Images/phone-call.svg'
// import { LuPhone } from "react-icons/lu";
import privacyIcon from '../../../Assets/Images/shield-tick.png'
import logOutIcon from '../../../Assets/Images/logout.png'
import trashIcon from '../../../Assets/Images/trash.png'
import Setting from "../PersonInfoComponents/Setting/Setting";


function Contact() {
  const BasicsData=[
    {
      description:'Saved Messages',
      icon: savedIcon
    },
    {
      description:'Pinned Messages',
      icon: pinnedIcon
    },
  ]
  const SettingData=[
    {
      description:'Language',
      icon: langIcon,
      color:'black'
    },
    {
      description:'About Us',
      icon: noteIcon,
      color:'black'
    },
    {
      description:'Contact Us',
      icon: phoneIcon,
      color:'black'
    },
    {
      description:'Privacy Ploicy',
      icon: privacyIcon,
      color:'black'
    },
    {
      description:'Sign Out',
      icon: logOutIcon,
      color:'black'
    },
    {
      description:'Delele Account',
      icon: trashIcon,
      color: '#FF3B30'
    },
  ]
  return (
    <>
      <Col md="4" className="pe-5 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <h3>Chats</h3>
          <div className="fs-5 fw-bold">
<span class="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
<i className="me-2">
              <RxHamburgerMenu />
            </i>
</span>

<div class="offcanvas offcanvas-start px-2" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class=" px-3 ">
                <div className="d-flex align-items-center justify-content-between   mx-auto">
                  <div className="d-flex align-items-center justify-content mt-5 ">
                    <img src={userImg} className=" rounded-circle me-2" style={{width:'90px',height:'90PX'}} alt="" />
                    <div style={{lineHeight:'0.6'}}>
                      <h5 style={{fontSize:'20px',fontWeight:'600'}}> Mhd Shaar</h5>
                      <p style={{fontSize:'16px',fontWeight:'500'}}>+963 982 305 060</p>
                    </div>
                  </div>
                  {/* <i><FaRegEdit className="mt-5 fs-4"/></i> */}
                  <img src={editIcon} className="mt-3" alt="" />
                </div>
                <p className="mt-5 mb-1" style={{fontWeight:'600',fontSize:'18px',fontFamily:'Cairo ,sans-serif',letterSpacing:'-0.4px'}}>Basics</p>
                {
                  BasicsData.map((e)=>{
                    return(
                      <Basics description={e.description} icon={e.icon}/>
                    )
                  })
                }
                <p className="mt-5 mb-1" style={{fontWeight:'600',fontSize:'18px',fontFamily:'Cairo ,sans-serif',letterSpacing:'-0.4px'}}>Settings</p>
                <Row>
                  {
                    SettingData.map((e)=>{
                      return(
                        <>
                        <Col lg='6'>
                          <Setting description={e.description} icon={e.icon} color={e.color}/>
                        </Col>
                        </>
                      )
                    })
                  }
                </Row>
              </div>
</div>

            <i>
              <CiEdit />
            </i>
          </div>
        </div>

        <div className="search d-flex justify-content-between align-items-center mt-4 mb-4">
          <input type="search" placeholder="Search " />
          <i className="fs-4">
            <RiSearch2Line />
          </i>
        </div>
        <div className="contacts ">
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
        </div>
      </Col>
      <Col md="9"></Col>
    </>
  );
}

export default Contact;












// <span
//               class=""
//               type="button"
//               data-bs-toggle="offcanvas"
//               data-bs-target="#offcanvasScrolling"
//               aria-controls="offcanvasScrolling"
//             >
//                   <i className="me-2">
//               <RxHamburgerMenu />
//             </i>
//             </span>

//             <div
//               class="offcanvas offcanvas-start"
//               data-bs-scroll="true"
//               data-bs-backdrop="false"
//               tabindex="-1"
//               id="offcanvasScrolling"
//               aria-labelledby="offcanvasScrollingLabel"
//             >
//               <div class="offcanvas-header">
//                 {/* <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
//                   Colored with scrolling
//                 </h5> */}
//                 <button
//                   type="button"
//                   class="btn-close text-reset"
//                   data-bs-dismiss="offcanvas"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div class="offcanvas-body px-5 ">
//                 <div className="d-flex align-items-center justify-content-between   mx-auto">
//                   <div className="d-flex align-items-center justify-content mt-5 ">
//                     <img src={userImg} className="w-25 rounded-circle p-1" alt="" />
//                     <div style={{lineHeight:'1.3'}}>
//                       <h5 style={{fontSize:'20px'}}>User name</h5>
//                       <p style={{fontSize:'16px',fontWeight:'lighter'}}>+222221</p>
//                     </div>
//                   </div>
//                   <i><FaRegEdit className="mt-5 fs-4"/></i>
//                 </div>
//                 <Basics/>
//               </div>
//             </div>