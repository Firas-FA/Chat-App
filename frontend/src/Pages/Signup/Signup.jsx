import React from 'react'
import personImg from '../../Assets/Images/person.png'
import { SlCalender } from "react-icons/sl";
import './SignupStyle.css'

function Signup() {
  return (
    <>
    <div>
      <form action="">
        <div>
          <div>
            <img src={personImg} alt="" />
          </div>
          <input type="text" placeholder='Full name'/>
          <input type="email" placeholder='Full namename@example.come'/>
          <div class="input-container">
            <i><SlCalender /></i> 
            <input type="text" placeholder="Search..."/>
          </div>

        </div>
      </form>
    </div>
    </>
  )
}

export default Signup