import React from 'react'
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './profile.css'

function Profile() {
  return (
    <div className='profile-container'>

        <div className='profile-header'>  
        <div className='profile-div'><NavLink to="" className="profile-link"><p>My Profile</p></NavLink></div> 
        <div className='profile-div'> <NavLink to="editprofile" className="profile-link"><p>edit profile</p></NavLink></div>
        </div>
        <div className='profile-content'>
        <Outlet /> 
        </div>
       
    </div>
  )
}

export default Profile