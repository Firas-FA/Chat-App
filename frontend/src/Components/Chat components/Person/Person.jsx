import React from 'react'
import personImg from '../../../Assets/Images/person.png'
import './PersonStyle.css'


function Person() {
  return (
    <>
    <div className='d-flex align-items-center w-100 bg- mt-3 pe-2 person'>
        <div className=' w-25 p-1 per-img'> 
            <img src={personImg} className='w-100 rounded-circle ' alt="" />
            <div className='online'></div>
        </div>
        <div className='w-75 lh-1 px-2'> 
            <p className='fw-bold mb-2' style={{fontSize:'16px'}}>User Name</p>
            <div className='d-flex text-secondary'>
              <p className='msgTitle ' style={{fontSize:'14px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!</p>
              <p >.15h</p>
            </div>
        </div>
        <div className='newMsg'></div>
    </div>
    </>
  )
}

export default Person