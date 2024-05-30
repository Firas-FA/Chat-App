import React from 'react'
import { Col } from 'react-bootstrap'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { RiSearch2Line } from "react-icons/ri";
import './ContactStyle.css'

function Contact() {
  return (
    <>
    <Col md='3' className='px-4 py-5'>
        <div className='d-flex justify-content-between align-items-center'>
            <h3>Chats</h3>
            <div className='fs-5 fw-bold'>
                <i className='me-2'><RxHamburgerMenu /></i>
                <i ><CiEdit /></i>
            </div>
        </div>
        <div className='search d-flex justify-content-between align-items-center mt-3'>
            <input type="search" placeholder='Search '/>
            <i className='fs-4'><RiSearch2Line /></i>
        </div>
    </Col>
    </>
  )
}

export default Contact