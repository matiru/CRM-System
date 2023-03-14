import React from 'react'
import logo from '../images/logo1.png'
import profile from '../images/person1.png'
import settings from '../images/settings-icon.jpg'
import logout from '../images/logout.jpg'
import "./header.css"

function HeaderComponent() {
  return (
    <div className='header'>
        <div className='logoandname'>
        <img className ="header-logo"src ={logo}></img>
        <h1>C~R~M</h1>
        </div>
        <div className='mid-header'>
        <div className='welcomemessage'>
        <img className='profile-picture' src={profile}></img>
        <h1>Hello Matiru</h1>
        </div>
        <div className='signoutandsetting'>
        <img className='settings-logo' src={settings}></img>
        <img className="logout-logo" src={logout}></img>
        </div>
        </div>
     </div>

    
  )
}

export default HeaderComponent