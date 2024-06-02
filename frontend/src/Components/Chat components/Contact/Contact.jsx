import React from 'react'
import { Col } from 'react-bootstrap'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { RiSearch2Line } from "react-icons/ri";
import './ContactStyle.css'
import Person from '../Person/Person';

function Contact() {
  return (
    <>
    <Col md='3' className='px-3 py-3'>
        <div className='d-flex justify-content-between align-items-center'>
            <h3>Chats</h3>
            <div className='fs-5 fw-bold'>
                <i className='me-2'><RxHamburgerMenu /></i>
                <i ><CiEdit /></i>
            </div>
        </div>
        <div className='search d-flex justify-content-between align-items-center mt-4 mb-4'>
            <input type="search" placeholder='Search '/>
            <i className='fs-4'><RiSearch2Line /></i>
        </div>
        <div className='contacts '>
          <Person/>
          <Person/>
          <Person/>
          <Person/>
          <Person/>
          <Person/>
          <Person/>
          <Person/>
          <Person/>
        </div>
    </Col>
    </>
  )
}

export default Contact