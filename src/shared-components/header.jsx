import React from 'react'
import logo from '../images/logo1.png'
import profile from '../images/person1.png'
import settings from '../images/settings-icon.jpg'
import logout from '../images/logout.jpg'
import "./header.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function HeaderComponent() {

  const navigate = useNavigate();

  function handleSignout(){

    navigate('/');
  }





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
        <Link to="settings" className="sidebar-link">
        <img className='settings-logo' src={settings}></img>
        </Link>
        <img className="logout-logo"  onClick={handleSignout} src={logout}></img>
        </div>
        </div>
     </div>

    
  )
}

export default HeaderComponent