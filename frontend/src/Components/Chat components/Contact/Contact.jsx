import React from 'react'
import { Col } from 'react-bootstrap'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { RiSearch2Line } from "react-icons/ri";

function Contact() {
  return (
    <>
    <Col md='3' className='px-4 py-5'>
        <div className='d-flex justify-content-between align-items-center'>
            <h3>Chats</h3>
            <div className='fs-5 fw-bold'>
                <i className='me-2'><RxHamburgerMenu /></i>
                <i><CiEdit /></i>
            </div>
        </div>
        <div>
            <input type="search" />
            <i><RiSearch2Line /></i>
        </div>
    </Col>
    </>
  )
}

export default Contact