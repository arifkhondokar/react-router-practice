import React from 'react'
import './mainlayout.css'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    // <h1>header section</h1>
    <>
    <header className="header">
      <nav className="nav container flex">
        <a className="logo-content flex">
          <i className="fa-solid fa-mug-hot logo-i"></i>
          <span className="logo-text">Coffee.</span>
        </a>          
        <div className="menu-content">
            <ul className="menu-list flex">
                <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li><NavLink className="nav-link" to="about">About</NavLink></li>
                <li><NavLink className="nav-link" to="menu">Menu</NavLink></li>
                <li><NavLink className="nav-link" to="review">Review</NavLink></li>
            </ul>
        </div>
                    
        <div className="contact-content flex">
            <i className="fa-solid fa-phone call-icon"></i>
            <span className="phone-number">0022-0303-2030</span>
        </div>
      </nav>
    </header>
    </>
    

  )
}

export default Header