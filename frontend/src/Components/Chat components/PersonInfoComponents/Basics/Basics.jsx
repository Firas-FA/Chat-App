import React from 'react'
// import { FaAngleRight } from "react-icons/fa";
import './BasicsStyle.css'
// import savedMsg from '../../../../Assets/Images/save-2.png'
import arrowIcon from '../../../../Assets/Images/Icon.png'

function Basics({icon,description}) {
  return (
    <>
        <div className='basics d-flex align-items-center justify-content-between mb-2 '>
            <div className='d-flex align-items-center py-2'>
                <img src={icon}  className=' me-2' style={{width:'21px'}} alt="" />
                <p className='my-auto'>{description}</p>
            </div>
            <div>
                <img className='w-75' src={arrowIcon} alt="" />
            </div>
        </div>
    </>
  )
}

export default Basics