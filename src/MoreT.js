import React from 'react'
import { IoMdNotifications } from "react-icons/io";
import { MdLiveHelp } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
import { MdGetApp } from "react-icons/md";
const MoreT = () => {
  return (
    <div className='moret'>
        <div className='moret_in'>
           <span className="h" ><IoMdNotifications /></span>
            <p>Notification Preferences</p>
        </div>
        <hr />
        <div className='moret_in'>
           <span className="h"><MdLiveHelp /></span>
            <p>24*7 Customer Care</p>
        </div>
        <hr />
        <div className='moret_in'>
            <span className="h"><BiTrendingUp /></span>
            <p>Advertise</p>
        </div>
        <hr />
        <div className='moret_in'>
            <span className="h"><MdGetApp /></span>
            <p>Download App</p>
        </div>
    </div>
  )
}

export default MoreT